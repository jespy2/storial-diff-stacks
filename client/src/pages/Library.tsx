import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "../redux/store";
import { IBook, ModalType } from "../types";

import { BookTable, Footer, Modal } from "../components";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Library = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalContentType, setModalContentType] = useState<ModalType>(
		ModalType.ADD_BOOK
	);

	const state = useAppSelector((state) => state);
	const { books: booksState, isLoading } = state.books;

	const handleSetModalContent = (modalState: ModalType) => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalContentType(ModalType.ADD_BOOK);
		setIsModalOpen(false);
	};

	// useEffect(() => {
	// 	booksState.success && setBooks(booksState.data);
	// 	console.log(booksState.data);
	// }, [booksState]);

	// useEffect(() => {
	// 	setIsModalOpen(false);
	// }, [books]);

	return (
		<div className='home-container'>
			<main className='page-header-container'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='header-logo'
				/>
				<h1 className='page-header-title'>Your Library</h1>
			</main>
			{!isLoading && <div>Loading...</div>}
			{booksState && <BookTable />}

			<section className='page-navbar px-4 '>
				<Link to='/'>
					<button className='page-btn'>home</button>
				</Link>

				<button
					className='page-btn'
					onClick={() => handleSetModalContent(ModalType.ADD_BOOK)}
				>
					quick add book
				</button>
			</section>

			{isModalOpen && (
				<Modal
					handleCloseModal={handleCloseModal}
					modalContentType={modalContentType}
				/>
			)}

			<Footer />
		</div>
	);
};
