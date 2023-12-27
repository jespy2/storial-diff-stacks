import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../../redux/store";
import { closeModal, openNotification } from "../../../../../redux/slices";
import { useAppSelector } from "../../../../../hooks";
import { bookThunks } from "../../../../../redux/thunks";
import { IBook } from "../../../../../types";

export const EditBook = () => {
	const dispatch = useDispatch<AppDispatch>();
	const modalState = useAppSelector((state) => state.modal);
	const authState = useAppSelector((state) => state.auth.auth);
	const { username } = authState.userInfo;

	const [_id, set_Id] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [notes, setNotes] = useState<string>("");
	const [status, setStatus] = useState<"read" | "unread">("unread");
	const [newTitle, setNewTitle] = useState<string>("");
	const [newAuthor, setNewAuthor] = useState<string>("");
	const [newNotes, setNewNotes] = useState<string>("");

	//load book data for initial render and apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		(async () => {
			await dispatch(bookThunks.getBookById(modalState.id)).then((book) => {
				set_Id(book.payload.data._id);
				setTitle(book.payload.data.book.title);
				setAuthor(book.payload.data.book.author);
				setNotes(book.payload.data.book.notes);
				setStatus(book.payload.data.book.status);
				titleField.current && titleField.current.focus();
			});
		})();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload: IBook = {
			username: username,
			_id: _id,
			book: {
				title: newTitle ? newTitle : title,
				author: newAuthor ? newAuthor : author,
				notes: newNotes ? newNotes : notes,
				status: status
			},
		};

		await dispatch(bookThunks.updateBookById(payload)).then(() => {
			dispatch(
				openNotification({
					message: `${newTitle} has been successfully updated`,
				})
			);
			dispatch(closeModal());
		});
	};

	const body = () => (
		<div className='flex flex-col'>
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
					id='title'
					ref={titleField}
					className='textfield focus:outline-none focus:shadow-outline'
					required
					defaultValue={title}
					onChange={(e) => {
						setNewTitle(e.target.value);
					}}
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
					defaultValue={author}
					onChange={(e) => {
						setNewAuthor(e.target.value);
					}}
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
					defaultValue={notes}
					onChange={(e) => setNewNotes(e.target.value)}
				/>
				<input type='submit' value='Update Book' className='submit-btn' />
			</form>
		</div>
	);

	return {
		title: "Edit a book",
		body,
	};
};
