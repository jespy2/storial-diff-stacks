import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../redux/store";
import { closeModal } from "../../../../redux/slices";
import { useAppSelector } from "../../../../hooks";
import thunks from "../../../../redux/thunks/books";

export const EditBook = () => {
  const dispatch = useDispatch<AppDispatch>();
  const modalState = useAppSelector((state) => state.modal);

  const [_id, set_Id] = useState<string>("");
  const [title, setTitle] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [notes, setNotes] = useState<string>("");
	const [newTitle, setNewTitle] = useState<string>("");
	const [newAuthor, setNewAuthor] = useState<string>("");
	const [newNotes, setNewNotes] = useState<string>("");

	//load book data for initial render and apply focus to title field
	const titleField = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
		(async () => {
      await dispatch(thunks.getBookById(modalState.id))
        .then((book) => {
          set_Id(book.payload.data._id);
          setTitle(book.payload.data.title);
          setAuthor(book.payload.data.author);
          setNotes(book.payload.data.notes);
          titleField.current && titleField.current.focus();
        });
		})();
	}, []);

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const payload = { _id, title, author, notes };
		payload.title = newTitle ? newTitle : title;
		payload.author = newAuthor ? newAuthor : author;
		payload.notes = newNotes ? newNotes : notes;

		await dispatch(thunks.updateBookById(payload)).then(() => {
			window.alert(`${newTitle} has been successfully updated`);
			dispatch(closeModal());
		});
	};

	const body = () => (
		<div className='flex flex-col'>
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
						id='title'
						ref={titleField}
						className='textfield focus:outline-none focus:shadow-outline'
						required
						defaultValue={title}
						onChange={(e) => {
							setNewTitle(e.target.value);
						}}
					/>
					<label>Author</label>
					<input
						type='text'
						name='Author'
						id='Author'
						className='textfield focus:outline-none focus:shadow-outline'
						required
						defaultValue={author}
						onChange={(e) => {
							setNewAuthor(e.target.value);
						}}
					/>
					<label>Notes</label>
					<textarea
						name='Notes'
						id='Notes'
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
  }
};
