import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../redux/store";
import { openNotification } from "../../../redux/slices";
import { bookThunks } from "../../../redux/thunks";
import { IBook } from "../../../types";

export const Pill = ({ book }: { book: IBook }) => {
	const dispatch = useDispatch<AppDispatch>();

	const handleStatusChange = async () => {
		let updatedBook = book;
		updatedBook = {
			...updatedBook,
			status: book.status === "unread" ? "read" : "unread",
		};
		await dispatch(bookThunks.updateBookById(updatedBook)).then(() =>
			dispatch(
				openNotification({
					message: `Status has been updated for ${book.title}`,
				})
			)
		);
	};
	return (
		<div className={`pill-${book.status}`} onClick={handleStatusChange}>
			{book.status}
		</div>
	);
};
