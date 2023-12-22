import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { closeModal, openModal } from "../../redux/slices";
import { ModalType } from "../../types";
import { useAppSelector } from "../../hooks";
import {
	Alert,
	BookTable,
	Footer,
	Modal,
	ModeToggle,
	Notification,
} from "../../components";

export const Library = () => {
	const dispatch = useDispatch<AppDispatch>();
	const state = useAppSelector((state) => state);
	const navigate = useNavigate();
	const { isAuthenticated } = state.auth.auth;
	const { books: booksState, isLoading } = state.books;
	const { isOpen: isModalOpen } = state.modal;
	const { isOpen: isAlertOpen } = state.alert;
	const { isOpen: isNotificationOpen } = state.notification;

	useEffect(() => {
		closeModal();
	}, [booksState.data]);

	useEffect(() => { 
		if (!isAuthenticated) {
			navigate('/');
		}
	}, []);

	return (
		<div className='home-container'>
			{isAuthenticated &&
				<>
				<h2>Logout</h2>
					<ModeToggle />
					<main className='page-header-container'>
						<img
							src='/storial-logo.png'
							alt='Storial Logo'
							className='header-logo'
						/>
						<h1 className='page-header-title'>Your Library</h1>
					</main>
					{isLoading && <div>Loading...</div>}
					{!isLoading && <BookTable />}

					<section className='page-navbar px-4 '>
						<Link to='/'>
							<button className='page-btn'>home</button>
						</Link>

						<button
							className='page-btn'
							onClick={() => dispatch(openModal({ type: ModalType.ADD_BOOK }))}
						>
							quick add book
						</button>
					</section>

					{isNotificationOpen && <Notification />}

					{isAlertOpen && <Alert />}

					{isModalOpen && <Modal />}

					<Footer />
				</>
			}
		</div>
	);
};
