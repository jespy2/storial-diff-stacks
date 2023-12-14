import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BookTable, Footer } from "../components";

import api from "../api";
import { IBook } from "../types/books";

export const Library = () => {
	const [books, setBooks] = useState<IBook[]>([]);

	useEffect(() => {
		(async () => {
			await api.getAllBooks().then((books) => {
				setBooks(books.data.data);
			});
		})();
	}, []);

	return (
		<div className='home-container'>
			<main className='page-header-container'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='header-logo'
				/>
				<h1 className='page-header-title'>Your Library</h1>
			</main>

			{!books && <div>Loading...</div>}
			{books && <BookTable books={books} setBooks={setBooks} />}

			<section className='page-navbar px-4 '>
				<Link to='/'>
					<button className='page-btn'>home</button>
				</Link>

				<Link to='/books/create'>
					<button className='page-btn'>quick add book</button>
				</Link>
			</section>

			<Footer />
		</div>
	);
};
