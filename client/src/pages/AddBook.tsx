import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Footer } from "../components";

import api from "../api";

export const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [notes, setNotes] = useState("");
	const navigate = useNavigate();

	//upon render, apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		titleField.current && titleField.current.focus();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload = { title, author, notes };

		await api.insertBook(payload).then((res) => {
			navigate("/books/list");
		});
	};

	return (
		<div className='page-container'>
			<main className='page-header-container'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='header-logo'
				/>
				<h1 className='page-header-title'>Your Library</h1>
			</main>

			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label
					className='block text-gray-700 text-sm font-bold mb-2'
					htmlFor='title'
				>
					Title
				</label>
				<input
					type='text'
					name='title'
					ref={titleField}
					id='title'
					className='textfield focus:outline-none focus:shadow-outline'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Author</label>
				<input
					type='text'
					name='Author'
					id='Author'
					className='textfield focus:outline-none focus:shadow-outline'
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<label>Notes</label>
				<textarea
					name='Notes'
					id='Notes'
					className='textfield focus:outline-none focus:shadow-outline h-28'
					required
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				/>
				<input type='submit' value='Add Book' className='submit-btn' />
			</form>

			<section className='page-navbar'>
				<Link to='/'>
					<button className='page-btn'>home</button>
				</Link>

				<Link to='/books/list'>
					<button className='page-btn'>view library</button>
				</Link>
			</section>

			<Footer />
		</div>
	);
};
