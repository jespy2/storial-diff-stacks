import { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { userIsRegistered } from "../../../redux/slices";
import { authThunks } from "../../../redux/thunks";
import { IUser } from "../../../types";
import { cookieCreator } from "../../../util";

export const Signup = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [userInput, setUserInput] = useState<IUser>({
		email: "",
		password: "",
		username: "",
	});
	const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload: IUser = userInput;

		await dispatch(authThunks.createUser(payload));
		if (keepLoggedIn) {
			cookieCreator(dispatch, userInput.username);
		}
	};

	const handleIsRegistered = async (e: { preventDefault: () => void }) => {
		dispatch(userIsRegistered());
	};

	const { email, password, username } = userInput;
	return (
		<div className='flex flex-col items-center'>
			<img src='/storial-logo.png' alt='Storial Logo' className='header-logo' />
			<h2 className='text-3xl font-bold text-gray-400 mb-20'>
				New User Registration
			</h2>
			<form onSubmit={handleSubmit}>
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
					htmlFor='email'
				>
					<input
						type='email'
						name='email'
						id='email'
						className='textfield focus:outline-none focus:shadow-outline'
						value={email}
						placeholder='Email'
						onChange={(e) =>
							setUserInput({ ...userInput, email: e.target.value })
						}
					/>
				</label>
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
					htmlFor='username'
				>
					<input
						type='text'
						name='username'
						id='username'
						className='textfield focus:outline-none focus:shadow-outline'
						value={username}
						placeholder='Username'
						onChange={(e) =>
							setUserInput({ ...userInput, username: e.target.value })
						}
					/>
				</label>
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
					htmlFor='password'
				>
					<div className='relative'>
						<EyeIcon
							className={`password-icon ${showPassword ? "block" : "hidden"}`}
							onClick={() => setShowPassword(!showPassword)}
						/>
						<EyeSlashIcon
							className={`password-icon ${!showPassword ? "block" : "hidden"}`}
							onClick={() => setShowPassword(!showPassword)}
						/>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							className='textfield focus:outline-none focus:shadow-outline'
							value={password}
							placeholder='Password'
							onChange={(e) =>
								setUserInput({ ...userInput, password: e.target.value })
							}
						/>
					</div>
				</label>
				<div>
					<label htmlFor='keep-logged-in'>
						<input
							name='keep-logged-in'
							type='checkbox'
							className='mr-2'
							checked={keepLoggedIn}
							onChange={() => setKeepLoggedIn(!keepLoggedIn)}
						/>
						Keep me logged in
					</label>
				</div>
				<button className='submit-btn' type='submit'>
					Sign Up
				</button>
			</form>
			<h3
				className='text-gray-400 text-sm font-bold mb-2 cursor-pointer'
				onClick={handleIsRegistered}
			>
				I'm already registered, let me login!
			</h3>
		</div>
	);
};
