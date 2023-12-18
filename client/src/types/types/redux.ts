import { IBook, ModalType } from '../index';

export interface IModalState { 
  isOpen: boolean;
  modalContentType: ModalType;
  id?: string;
}

export enum SortItem {
  TITLE = 'title',
  AUTHOR = 'author',
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none',
}

export interface IBookState { 
  books: {
    success: boolean;
    data: IBook[];
    sortInfo: {
      sortBy: SortItem | '';
      sortDirection: SortDirection;
    }
  };
  isLoading: boolean;
  isError: boolean;
}