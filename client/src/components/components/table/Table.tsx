import { useAppSelector } from "../../../hooks";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export const Table = () => {
	const state = useAppSelector((state) => state);
	const { isLoading } = state.books;

	return (
		<div className='flex-grow overflow-auto h-80 w-3/4 rounded-md shadow-lg dark:border dark:border-slate-300 dark:shadow-md dark:shadow-slate-500'>
			{isLoading && <div>Collecting your books from the shelves...</div>}
			{!isLoading && (
				<table className='relative w-full table '>
					<TableHeader />
					<TableBody />
				</table>
			)}
		</div>
	);
};
