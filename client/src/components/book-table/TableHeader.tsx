import { useDispatch } from "react-redux";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../redux/store";
import { bookSlice } from "../../redux/slices";
import { SortDirection, SortItem } from "../../types";
import { useAppSelector } from "../../hooks";

export const TableHeader = () => {
	const dispatch = useDispatch<AppDispatch>();
	const sortInfoState = useAppSelector((state) => state.books.books.sortInfo);

	const sortIconClass = (sortBy: string, icon: string) => {
		let iconClass = "";
		const isSorting = sortInfoState.sortBy === sortBy ? true : false;
		const sameSortIconDirection =
			sortInfoState.sortDirection === icon ? true : false;

		if (isSorting && sameSortIconDirection) iconClass = "singleSortIcon";
		if (isSorting && !sameSortIconDirection) iconClass = "hidden";

		return iconClass;
	};

	return (
		<>
			<thead>
				<tr>
					<th
						className='sticky top-0 px-6 py-3 bg-blue-300 hover:bg-gray-400'
						// onClick={() =>
						// 	dispatch(bookSlice.actions.sortBooks({ sortBy: SortItem.TITLE }))
						// }
					>
						Read
						{/* <span className='sortIcons'>
							<ChevronUpIcon
								className={sortIconClass(SortItem.TITLE, SortDirection.DESC)}
							/>
							<ChevronDownIcon
								className={sortIconClass(SortItem.TITLE, SortDirection.ASC)}
							/>
						</span> */}
					</th>
					<th
						className='sticky top-0 px-6 py-3 bg-blue-300 hover:bg-gray-400'
						onClick={() =>
							dispatch(bookSlice.actions.sortBooks({ sortBy: SortItem.TITLE }))
						}
					>
						Title
						<span className='sortIcons'>
							<ChevronUpIcon
								className={sortIconClass(SortItem.TITLE, SortDirection.DESC)}
							/>
							<ChevronDownIcon
								className={sortIconClass(SortItem.TITLE, SortDirection.ASC)}
							/>
						</span>
					</th>
					<th
						className='sticky top-0 px-6 py-3 bg-blue-300 hover:bg-gray-400'
						onClick={() =>
							dispatch(bookSlice.actions.sortBooks({ sortBy: SortItem.AUTHOR }))
						}
					>
						Author
						<span className='sortIcons'>
              <ChevronUpIcon
								className={sortIconClass(SortItem.AUTHOR, SortDirection.DESC)}
              />
              <ChevronDownIcon
								className={sortIconClass(SortItem.AUTHOR, SortDirection.ASC)}
              />
            </span>
					</th>
					<th className='sticky top-0 px-6 py-3 bg-blue-300'>Notes</th>
					<th className='sticky top-0 px-6 py-3 bg-blue-300'></th>
					<th className='sticky top-0 px-6 py-3 bg-blue-300'></th>
				</tr>
			</thead>
		</>
	);
};
