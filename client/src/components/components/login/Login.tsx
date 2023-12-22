import { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import { userNotRegistered } from "../../../redux/slices";
import { authThunks } from "../../../redux/thunks";
import { IUser } from "../../../types";

export const Login = () => {
	const [userInput, setUserInput] = useState<IUser>({
		email: "",
		password: "",
		username: "",
	});
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload: IUser = userInput;

		await dispatch(authThunks.loginUser(payload)).then(() => {
			console.log("payload", payload);
		});
	};

	const handleNotRegistered = async (e: { preventDefault: () => void }) => {
		dispatch(userNotRegistered());
	};

	const { password, username } = userInput;
	return (
		<div className='flex flex-col items-center'>
			<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='header-logo'
				/>
			<h2 className='text-3xl font-bold text-gray-400 mb-20'>Login</h2>
			<form onSubmit={handleSubmit}>
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
					<input
						type='password'
						name='password'
						id='password'
						className='textfield focus:outline-none focus:shadow-outline'
						value={password}
						placeholder='Password'
						onChange={(e) =>
							setUserInput({ ...userInput, password: e.target.value })
						}
					/>
				</label>
				<button className='submit-btn' type='submit'>
					Login
				</button>
			</form>
			<h3
				className='text-gray-400 text-sm font-bold mb-2 cursor-pointer'
				onClick={handleNotRegistered}
			>
				I'm new, get me registered!
			</h3>

			<h3
				className='text-gray-400 text-sm font-bold mb-2 cursor-pointer'
				onClick={()=> alert('send me a reset link')}
			>
				Uh...I forgot my password!
			</h3>
		</div>
	);
};
