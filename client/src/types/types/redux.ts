import { IBook, ModalType } from '../index';

export interface IModalState { 
  isOpen: boolean;
  modalContentType: ModalType;
  id?: string;
}

export interface IBookState { 
  books: {
    success: boolean;
    data: IBook[]
  };
  isLoading: boolean;
  isError: boolean;
}