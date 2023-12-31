import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import { closeModal, openModal } from "../../redux/slices";
import { ModalType } from "../../types";
import { useAppSelector } from "../../hooks";
import {
	Alert,
	Table,
	Footer,
	Modal,
	ModeToggle,
	Notification,
	Logout,
} from "../../components";

export const Library = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();
	const authState = useAppSelector((state) => state.auth.auth);
	const booksState = useAppSelector((state) => state.books);
	const modalState = useAppSelector((state) => state.modal);
	const alertState = useAppSelector((state) => state.alert);
	const notificationState = useAppSelector((state) => state.notification);
	const { isAuthenticated } = authState;
	const { isLoading } = booksState;
	const { isOpen: isModalOpen } = modalState;
	const { isOpen: isAlertOpen } = alertState;
	const { isOpen: isNotificationOpen } = notificationState;

	useEffect(() => {
		closeModal();
	}, [booksState.books.data]);

	useEffect(() => { 
		if (!isAuthenticated) {
			navigate('/');
		}
	});

	return (
		<div className='home-container'>
			{isAuthenticated &&
				<>
					<Logout />
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
					{!isLoading && <Table />}

					<section className='page-navbar px-4 '>
						<Link to='/'>
							<button className='standard-btn'>home</button>
						</Link>

						<button
							className='standard-btn'
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
