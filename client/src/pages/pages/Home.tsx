import { useState } from "react";
import {
	Home as HomeContent,
	Login,
	Logout,
	ModeToggle,
	Signup,
} from "../../components";
import { useAppSelector } from "../../hooks";

export const Home = () => {
	const authState = useAppSelector((state) => state.auth.auth);
	const { isAuthenticated, isRegistered } = authState;
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
