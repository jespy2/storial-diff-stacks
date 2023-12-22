import { useCallback, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "./redux/store";
import { bookThunks } from "./redux/thunks";
import { routesConfig } from "./App.routes";

function App() {
	const router = createBrowserRouter(routesConfig);
	const dispatch = useDispatch<AppDispatch>();
	const fetchBooks = useCallback(() => {
		dispatch(bookThunks.getAllBooks());
	}, [dispatch]);

	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);

	return (
		<div className='App'>
			<section>
				<RouterProvider router={router} />
			</section>
		</div>
	);
}

export default App;
