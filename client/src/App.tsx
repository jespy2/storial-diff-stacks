import React, { useCallback, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "./redux/store";
import thunks from "./redux/thunks/books";
import { routesConfig } from "./App.routes";

function App() {
	const router = createBrowserRouter(routesConfig);
	const dispatch = useDispatch<AppDispatch>();
	const state = useSelector((state) => state);
	const initialFetch = useCallback(() => {
		dispatch(thunks.getAllBooks());
	}, [dispatch]);

	useEffect(() => {
		initialFetch();
	}, [initialFetch]);

	console.log(state);

	return (
		<div className='App'>
			<section>
				<RouterProvider router={router} />
			</section>
		</div>
	);
}

export default App;
