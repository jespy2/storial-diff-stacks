import { Home, Library, NotFound } from "./pages";

export const routesConfig = [
	{
		errorElement: <NotFound />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/books/list", element: <Library /> },
		],
	},
];
