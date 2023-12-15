import { IBook, ModalType } from '../index';

export interface IModalState { 
  isOpen: boolean;
  modalContentType: ModalType;
}

export interface IBookState { 
  books: {
    success: boolean;
    data: IBook[]
  };
  isLoading: boolean;
  isError: boolean;
}