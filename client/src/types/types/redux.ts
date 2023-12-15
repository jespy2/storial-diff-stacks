import { IBook } from '../index';

export interface IModalState { 
  isOpen: boolean;
  modalContentType: string;
}

export interface IBookState { 
  books: {
    success: boolean;
    data: IBook[]
  };
  isLoading: boolean;
  isError: boolean;
}