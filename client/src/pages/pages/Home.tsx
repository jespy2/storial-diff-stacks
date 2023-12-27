import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
	Home as HomeContent,
	Login,
	Logout,
	ModeToggle,
	Signup,
} from "../../components";
import { getCookie } from "../../util/GetCookie";
import { useAppSelector } from "../../hooks";
import { authThunks } from "../../redux/thunks";
import { IUser } from "../../types";
import { AppDispatch } from "../../redux/store";

export const Home = () => {
	const authState = useAppSelector((state) => state.auth.auth);
	const mystate = useAppSelector((state) => state.auth.auth.userInfo);
	const { isAuthenticated, isRegistered } = authState;
	const dispatch = useDispatch<AppDispatch>();
	

	useEffect(() => { 
		if (getCookie('keepLoggedIn')) {
			dispatch(authThunks.getUser(getCookie('userName') as string)); 
			const payload: IUser = {
				username: getCookie('userName') as string,
				password: getCookie('password') as string,
				email: getCookie('email') as string
			};
			 dispatch(authThunks.loginUser(payload));
		}
	}, []);
	
	return (
		<div className='home-container'>
			
			<ModeToggle />
			{!isAuthenticated && !isRegistered && <Signup />}
			{!isAuthenticated && isRegistered && <Login />}
			{isAuthenticated &&
				<>
					<Logout />
					<HomeContent />
				</>
			}
		</div>
	);
};
