import { useState } from "react";
import {
	Home as HomeContent,
	Login,
	ModeToggle,
	Signup,
} from "../../components";
import { useAppSelector } from "../../hooks";

export const Home = () => {
	const authState = useAppSelector((state) => state.auth.auth);
	const { isAuthenticated, isRegistered } = authState;
	return (
		<div className='home-container'>
			<h2>Logout</h2>
			<ModeToggle />
			{!isAuthenticated && !isRegistered && <Signup />}
			{!isAuthenticated && isRegistered && <Login />}
			{isAuthenticated && <HomeContent />}
		</div>
	);
};
