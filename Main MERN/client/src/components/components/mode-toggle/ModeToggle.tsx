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
		const themeToggler = {
			dark: 'light',
			light: 'dark'
		}
		if (darkMode) {
			localStorage.setItem('color-theme', darkMode as string);
			document.documentElement.classList.remove(themeToggler[darkMode as keyof typeof themeToggler]);
			document.documentElement.classList.add(darkMode);
		}
	}, [darkMode]);

	return (
		<div className='mode-toggle group'>
			<Tooltip message='Toggle dark/light mode' parent='mode-toggle' />
			<button onClick={(e) => handleToggle(e)} >
				<SunIcon className={`mode-toggle-icon ${darkMode === 'light' && "hidden"}`} />
				<MoonIcon className={`mode-toggle-icon ${darkMode === 'dark' && "hidden"}`} />
			</button>
		</div>
	);
};
