import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { IBookTableProps, ISortInfo } from "../../types";
import { handleSort } from "./BookTable.config";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const BookTable = () => {
	const [sortInfo, setSortInfo] = useState<ISortInfo>({
		sortBy: "",
		sortDirection: "",
	});
	const navigate = useNavigate();

	const state = useAppSelector((state) => state);
	const { isLoading } = state.books;

	const handleClick = (sortByString: string) => {
		// const sortProps = {
		// 	books,
		// 	setBooks,
		// 	sortInfo,
		// 	setSortInfo,
		// 	sortByString,
		// };
		// handleSort(sortProps);
	};

	return (
		<div className='flex-grow overflow-auto h-80 w-3/4 rounded-md shadow-lg'>
			{isLoading && <div>Collecting your books from the shelves...</div>}
			{!isLoading && (
				<table className='relative w-full table '>
					<TableHeader handleClick={handleClick} sortInfo={sortInfo} />
					<TableBody navigate={navigate} />
				</table>
			)}
		</div>
	);
};
