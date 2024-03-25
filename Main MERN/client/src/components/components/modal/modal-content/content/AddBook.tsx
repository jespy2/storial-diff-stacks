import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../../redux/store";
import { closeModal, openNotification } from "../../../../../redux/slices";
import { bookThunks } from "../../../../../redux/thunks";
import { IBook } from "../../../../../types";
import { useAppSelector, useFormInput } from "../../../../../hooks";

export const AddBook = () => {
	const dispatch = useDispatch<AppDispatch>();
	const authState = useAppSelector((state) => state.auth.auth);
	const { username } = authState.userInfo;

	const titleProps = useFormInput("");
	const authorProps = useFormInput("");
	const notesProps = useFormInput("");

	//upon render, apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
	useEffect(() => {
		titleField.current && titleField.current.focus();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		console.log(titleProps.value);
		const payload: IBook = {
			username: username,
			book: {
				title: titleProps.value,
				author: authorProps.value,
				notes: notesProps.value,
				status: "unread"
			},
		};

		await dispatch(bookThunks.insertBook(payload)).then(() => {
			dispatch(
				openNotification({ message: `${payload.book.title} has been added to your library` })
			);
			dispatch(closeModal());
		});
	};

	const body = () => (
		<>
			<form className='flex flex-col' onSubmit={handleSubmit}>
				<label
					className='form-label'
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
					{...titleProps}
				/>
				<label
					className='form-label'
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
					{...authorProps}
				/>
				<label
					className='form-label'
					htmlFor='notes'
				>
					Notes
				</label>
				<textarea
					name='notes'
					id='notes'
					className='textfield focus:outline-none focus:shadow-outline h-28'
					required
					{...notesProps}
				/>
				<input type='submit' value='Add Book' className='standard-btn' />
			</form>
		</>
	);
	return {
		title: "Add a book",
		body,
	};
};
