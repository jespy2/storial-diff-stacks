import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import { openModal } from "../../../redux/slices";
import { useFetchBooks } from "../../../hooks";
import { ModalType } from "../../../types";
import { Footer } from "../../";

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

					<main className='home-header-container'>
						<img src='/storial-logo.png' alt='Storial Logo' className='w-1/3' />
						<h1 className='home-header-title'>Track Books To Read Next!</h1>
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
					</main>
					<Footer />
				</>
  )
};