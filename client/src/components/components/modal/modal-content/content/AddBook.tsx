import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../../redux/store";
import { closeModal, openNotification } from "../../../../../redux/slices";
import { bookThunks } from "../../../../../redux/thunks";
import { IBook } from "../../../../../types";

export const AddBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [notes, setNotes] = useState("");
	const dispatch = useDispatch<AppDispatch>();

	//upon render, apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		titleField.current && titleField.current.focus();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload: IBook = { title, author, notes, status: "unread" };

		await dispatch(bookThunks.insertBook(payload)).then(() => {
			dispatch(
				openNotification({ message: `${title} has been added to your library` })
			);
			dispatch(closeModal());
		});
	};

	const body = () => (
		<>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
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
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
					htmlFor='author'
				>
					Author
				</label>
				<input
					type='text'
					name='author'
					id='author'
					className='textfield focus:outline-none focus:shadow-outline'
					required
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<label
					className='block text-gray-400 text-sm font-bold mb-2'
					htmlFor='notes'
				>
					Notes
				</label>
				<textarea
					name='notes'
					id='notes'
					className='textfield focus:outline-none focus:shadow-outline h-28'
					required
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
				/>
				<input type='submit' value='Add Book' className='submit-btn' />
			</form>
		</>
	);
	return {
		title: "Add a book",
		body,
	};
};
