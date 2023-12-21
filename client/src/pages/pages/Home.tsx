import { useState } from "react";
import {
	Home as HomeContent,
	Login,
	ModeToggle,
	Signup,
} from "../../components";
import { useAppSelector } from "../../hooks";

export const Home = () => {
	const state = useAppSelector((state) => state);
	const { isAuthenticated, isRegistered } = state.auth.auth;
	return (
		<div className='home-container'>
			<ModeToggle />
			{!isAuthenticated && !isRegistered && <Signup />}
			{!isAuthenticated && isRegistered && <Login />}
			{isAuthenticated && <HomeContent />}
		</div>
	);
};
