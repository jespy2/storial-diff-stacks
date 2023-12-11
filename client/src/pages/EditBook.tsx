import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Footer } from '../components/Footer';

import api from '../api';

export const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [newTitle, setNewTitle] = useState<string>('');
  const [newAuthor, setNewAuthor] = useState<string>('');
  const [newNotes, setNewNotes] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //load book data for initial render and apply focus to title field
  const titleField = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await api.getBookById(id as string)
      .then(book => {
        setTitle(book.data.data.title);
        setAuthor(book.data.data.author);
        setNotes(book.data.data.notes);
        setIsLoading(false);
        titleField.current && titleField.current.focus();
      })          
    })()
  }, [])  

  const handleSubmit = async (e: { preventDefault: () => void}) => {
    e.preventDefault();
    const payload = { title, author, notes };
    payload.title = newTitle ? newTitle : title;
    payload.author = newAuthor ? newAuthor : author;
    payload.notes = newNotes ? newNotes : notes;

    await api.updateBookById(id as string, payload)
    .then(res => {
      window.alert(`${newTitle} has been successfully updated`)
      navigate('/books/list');
    })
  }

  return (
    <div className="page-container">
      <main className="page-header-container">
        <img src="/storial-logo.png" alt="Storial Logo" className="header-logo" />
        <h1 className="page-header-title">
          edit {title}
        </h1>
      </main>
      {isLoading &&
        <h2>Loading...</h2>
      }

      {!isLoading &&
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title" >
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          ref={titleField}
          className="textfield focus:outline-none focus:shadow-outline"
          required
          defaultValue={title}
          onChange={(e) => {
            setNewTitle(e.target.value)
          }}
        />
        <label>
          Author
        </label>
        <input
          type="text"
          name="Author"
          id="Author"
          className="textfield focus:outline-none focus:shadow-outline"
          required
          defaultValue={author}
          onChange={(e) => {
            setNewAuthor(e.target.value)
          }}
        />
        <label>
          Notes
        </label>
        <textarea
          name="Notes"
          id="Notes"
          className="textfield focus:outline-none focus:shadow-outline h-28"
          required
          defaultValue={notes}
          onChange={(e) => setNewNotes(e.target.value)}
        />
        <input
          type="submit"
          value="Update Book"
          className="submit-btn"
        />
      </form>}

      <section className="page-navbar">
        <Link to="/books/list" >
          <button className="page-btn">view library</button>
        </Link>
        <Link to="/books/create" >
          <button className="page-btn">quick add book</button>
        </Link>
      </section>

      <Footer />
    </div>
  )
}