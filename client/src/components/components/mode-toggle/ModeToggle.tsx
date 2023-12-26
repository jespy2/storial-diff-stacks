import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

import { Tooltip } from "../../index";

export const ModeToggle = () => {
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem("color-theme")
			? localStorage.getItem("color-theme")
			: 'light'
	);

	const handleToggle = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setDarkMode(darkMode === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		localStorage.setItem('color-theme', darkMode ? 'dark' : 'light');
		if (darkMode === "dark") {
			document.documentElement.classList.remove("dark");
			document.documentElement.classList.add("light");
			localStorage.setItem("color-theme", "light");
		} else {
			document.documentElement.classList.remove("light");
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		}
	}, [darkMode]);

	return (
		<div className='mode-toggle group'>
			<Tooltip message='Toggle dark/light mode' parent='mode-toggle' />
			<button onClick={(e) => handleToggle(e)} >
				<MoonIcon className={`toggle-dark-icon ${darkMode === 'light' && "hidden"}`} />
				<SunIcon className={`toggle-light-icon ${darkMode === 'dark' && "hidden"}`} />
			</button>
		</div>
	);
};
