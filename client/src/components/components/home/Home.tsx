import { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import { bookThunks } from "../../../redux/thunks";
import { openModal } from "../../../redux/slices";
import { useAppSelector } from "../../../hooks";
import { ModalType } from "../../../types";
import { Footer } from "../../";

export const Home = () => { 
	const { username } = useAppSelector((state) => state.auth.auth.userInfo);
	const dispatch = useDispatch<AppDispatch>();
	const fetchBooks = useCallback(() => {
		dispatch(bookThunks.getAllBooks(username));
	}, [dispatch]);

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
							<button className='home-btn' data-testid='view-library-button'>
								view library
							</button>
						</Link>

						<Link to='/books/list'>
							<button
								className='home-btn'
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