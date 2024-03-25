import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Home as HomeContent, Login, Logout, Signup } from "../../components";
import { getCookie } from "../../util";
import { useAppSelector } from "../../hooks";
import { authThunks } from "../../redux/thunks";
import { IUser } from "../../types";
import { AppDispatch } from "../../redux/store";

export const Home = () => {
	const authState = useAppSelector((state) => state.auth.auth);
	const { isAuthenticated, isRegistered } = authState;
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (getCookie("keepLoggedIn")) {
			const payload: IUser = {
				username: getCookie("userName") as string,
				password: getCookie("password") as string,
				email: getCookie("email") as string,
			};
			dispatch(authThunks.loginUser(payload));
		}
	}, [dispatch]);

	return (
		<div className='page-container'>
			{!isAuthenticated && !isRegistered && <Signup />}
			{!isAuthenticated && isRegistered && <Login />}
			{isAuthenticated && (
				<>
					<Logout />
					<HomeContent />
				</>
			)}
		</div>
	);
};
