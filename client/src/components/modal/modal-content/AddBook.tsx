import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../../../api";
import { XMarkIcon } from "@heroicons/react/24/solid";

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
  
  const header = () =>  (
    <>
      <div className='modal-header-topbar'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='modal-header-logo'
        />      
        {/* <button className="modal-close-btn"><XMarkIcon /></button> */}
				<h1 className='modal-header-title'>Add a Book</h1>
			</ div>
    </>
  )

  const body = () => (
    <>
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
    </>
  )

  return {
    header,
    body
  }
};
