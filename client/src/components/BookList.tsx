import { useNavigate, Link } from "react-router-dom";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import api from "../api";
import { IBook } from "../types/books";

export const BookList = ({ books }: { books: IBook[] }) => {
	const navigate = useNavigate();

	const handleDelete = (id: number) => {
		api.deleteBookById(id);
		//refresh after delete
		navigate(0);
	};

	return (
		<div className='flex-grow overflow-auto h-80 w-3/4 rounded-md shadow-lg'>
			<table className='relative w-full table '>
				<thead>
					<tr>
						<th className='sticky top-0 px-6 py-3 bg-blue-300'>Title</th>
						<th className='sticky top-0 px-6 py-3 bg-blue-300'>Author</th>
						<th className='sticky top-0 px-6 py-3 bg-blue-300'>Notes</th>
						<th className='sticky top-0 px-6 py-3 bg-blue-300'></th>
						<th className='sticky top-0 px-6 py-3 bg-blue-300'></th>
					</tr>
				</thead>
				<tbody className='border-separate space-y-6 p-5 mt-10'>
					{books.map((book) => (
						<tr className='p-3 text-sm' key={book._id}>
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
											window.confirm(
												"Are you sure you wish to delete this book?"
											)
										)
										  book._id &&	handleDelete(book._id);
									}}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
