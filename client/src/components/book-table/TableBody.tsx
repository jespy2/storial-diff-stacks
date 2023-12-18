import { Key } from "react";
import { useDispatch } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import { useAppSelector } from "../../hooks";
import { ModalType } from "../../types";
import { openModal } from "../../redux/slices";
import thunks from "../../redux/thunks/books";
import { AppDispatch } from "../../redux/store";

export const TableBody = () => {
	const dispatch: AppDispatch = useDispatch();
	const bookState = useAppSelector((state) => state.books.books.data);

	return (
		<>
			{bookState &&
				bookState.map((book) => (
				<tbody className='border-separate space-y-6 p-5 mt-10'>
					<tr className='p-3 text-sm' key={book._id as Key}>
						<td className='border-r p-3'>{book.title}</td>
						<td className='border-r p-3'>{book.author}</td>
						<td className='p-3'>{book.notes}</td>
						<td>
							<PencilIcon className='link-icon' role="button" 
								onClick={() => dispatch(openModal({type: ModalType.EDIT_BOOK, id: book._id as string}))}
							/>
						</td>

						<td>
							<TrashIcon
								className='link-icon'
								onClick={async () => {
									if (
										window.confirm("Are you sure you wish to delete this book?")
									)
									{
										dispatch(thunks.deleteBookById(book._id));
									}
								}}
							/>
						</td>
					</tr>
				</tbody>
			))}
		</>
	);
};
