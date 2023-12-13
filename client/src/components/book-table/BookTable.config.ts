import { IBook, ISortInfo, ISortProps } from "../../types";
import api from '../../api';
import { NavigateFunction } from "react-router-dom";

export const handleDelete = (navigate: NavigateFunction, id: string) => {
  api.deleteBookById(id);
  //refresh after delete
  navigate(0);
};

export const handleSort = (props: ISortProps) => { 
  const { books, setBooks, sortInfo, setSortInfo, sortByString } = props;
  // logic for setting sort direction considering if the column being sorted changes
  let newSortBy = (sortInfo.sortBy) === sortByString ? false : true;
  let newSortDirection: string = '';
  if (newSortBy) newSortDirection = 'asc';
  if (!newSortBy && sortInfo.sortDirection === 'asc') newSortDirection = 'desc';
  if (!newSortBy && sortInfo.sortDirection === 'desc') newSortDirection = 'asc';

  const newSortInfo: ISortInfo = {
    sortBy: sortByString as string,
    sortDirection: newSortDirection as string
  }
  const typedSortBy = sortByString as keyof IBook;
  console.log(typedSortBy)
  const sortedBooks = [...books] ? [...books].sort((a: IBook, b: IBook) => {
    if (a === undefined || b === undefined) return 0;
    // @ts-ignore: Unreachable code error
    let aSortItem = typeof a[typedSortBy] === 'string' ? a[typedSortBy].toUpperCase() : a[typedSortBy];
    // @ts-ignore: Unreachable code error
    let bSortItem = typeof b[typedSortBy] === 'string' ? b[typedSortBy].toUpperCase() : b[typedSortBy];
    // @ts-ignore: Unreachable code error
    if (aSortItem < bSortItem) return newSortDirection === 'asc' ? -1 : 1;
    // @ts-ignore: Unreachable code error
    if (aSortItem > bSortItem) return newSortDirection === 'asc' ? 1 : -1;
    return 0;
  }) : [];
  console.log(sortedBooks);
  setSortInfo(newSortInfo)
  setBooks(sortedBooks ? sortedBooks : books);
};

export const sortIconClass = (sortInfo: ISortInfo, sortBy: string, icon: string) => {
  let iconClass = '';
  const isSorting = sortInfo.sortBy === sortBy ? true : false;
  const sameSortIconDirection = sortInfo.sortDirection === icon ? true : false;
  
  if (isSorting && sameSortIconDirection) iconClass = 'singleSortIcon';
  if (isSorting && !sameSortIconDirection) iconClass = 'hidden';

  return iconClass
}
