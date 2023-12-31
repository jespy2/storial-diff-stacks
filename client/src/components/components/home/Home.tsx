import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import { openModal } from "../../../redux/slices";
import { useFetchBooks } from "../../../hooks";
import { ModalType } from "../../../types";
import { Footer, Header } from "../../";

export const Home = () => { 
	const dispatch = useDispatch<AppDispatch>();
	const fetchBooks = useFetchBooks();

	useEffect(() => {
		fetchBooks();
	}, [fetchBooks]);

  return (
    <>
					<header>
						<title>Storial</title>
						<link rel='icon' href='/favicon.ico' />
					</header>

					<div className='home-header-container'>
						<Header title="Track books to read next!" />
						<Link to='books/list'>
							<button className='standard-btn' data-testid='view-library-button'>
								view library
							</button>
						</Link>

						<Link to='/books/list'>
							<button
								className='standard-btn'
								data-testid='add-book-button'
								onClick={() => dispatch(openModal({ type: ModalType.ADD_BOOK }))}
							>
								quick add book
							</button>
						</Link>
					</div>
					<Footer />
				</>
  )
};