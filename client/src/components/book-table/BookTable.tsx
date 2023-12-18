import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { ISortInfo } from "../../types";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const BookTable = () => {

	const state = useAppSelector((state) => state);
	const { isLoading } = state.books;

	return (
		<div className='flex-grow overflow-auto h-80 w-3/4 rounded-md shadow-lg'>
			{isLoading && <div>Collecting your books from the shelves...</div>}
			{!isLoading && (
				<table className='relative w-full table '>
					<TableHeader  />
					<TableBody />
				</table>
			)}
		</div>
	);
};
