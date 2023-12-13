import {
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/react/24/solid";

import { ISortInfo, ITableHeaderProps } from "../../types";
import { sortIconClass } from "./BookTable.config";

export const TableHeader = (props: ITableHeaderProps) => {
  const { handleClick, sortInfo } = props;
	return (
		<>
      <thead>
        <tr>
          <th
            className='sticky top-0 px-6 py-3 bg-blue-300 hover:bg-gray-400'
            onClick={() => handleClick("title")}
          >
            Title
            <span className='sortIcons'>
              <ChevronUpIcon
                className={sortIconClass(sortInfo, "title", "desc")}
              />
              <ChevronDownIcon
                className={sortIconClass(sortInfo, "title", "asc")}
              />
            </span>
          </th>
          <th
            className='sticky top-0 px-6 py-3 bg-blue-300 hover:bg-gray-400'
            onClick={() => handleClick("author")}
          >
            Author
            <span className='sortIcons'>
              <ChevronUpIcon
                className={sortIconClass(sortInfo, "author", "desc")}
              />
              <ChevronDownIcon
                className={sortIconClass(sortInfo, "author", "asc")}
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
