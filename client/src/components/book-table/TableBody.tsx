import { Key } from "react";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import { RootState } from "../../redux/store";
import { ITableBodyProps } from "../../types";
import { handleDelete } from "./BookTable.config";


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TableBody = (props: ITableBodyProps) => {
	const { navigate } = props;
	const state = useAppSelector((state) => state);
	const { books: booksState } = state.books;

	return (
		<>
			{booksState.data.map((book) => (
				<tbody className='border-separate space-y-6 p-5 mt-10'>
					<tr className='p-3 text-sm' key={book._id as Key}>
						<td className='border-r p-3'>{book.title}</td>
						<td className='border-r p-3'>{book.author}</td>
						<td className='p-3'>{book.notes}</td>
						<td>
							<Link to={`/books/update/${book._id}`}>
								<PencilIcon className='link-icon' />
							</Link>
						</td>

						<td>
							<TrashIcon
								className='link-icon'
								onClick={() => {
									if (
										window.confirm("Are you sure you wish to delete this book?")
									)
										book._id && handleDelete(navigate, book._id);
								}}
							/>
						</td>
					</tr>
				</tbody>
			))}
		</>
	);
};
