import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { Tooltip } from "../../index";

export const ModeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	const handleToggle = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setDarkMode(!darkMode);
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("storial-darkmode", "light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("storial-darkmode", "dark");
		}
	};

	useEffect(() => {
		setDarkMode(localStorage.getItem("storial-darkmode") === "dark");
	}, []);

	return (
		<div className='mode-toggle group'>
			<Tooltip message='Toggle dark/light mode' parent='mode-toggle' />
			<button onClick={(e) => handleToggle(e)}>
				<MoonIcon className={`toggle-dark-icon ${darkMode && "hidden"}`} />
				<SunIcon className={`toggle-light-icon ${!darkMode && "hidden"}`} />
			</button>
		</div>
	);
};
