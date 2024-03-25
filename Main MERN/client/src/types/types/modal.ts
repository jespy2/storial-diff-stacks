export enum ModalType { 
  ADD_BOOK = 'ADD_BOOK',
  EDIT_BOOK = 'EDIT_BOOK',
  DELETE_BOOK = 'NONE',
  NONE = 'NONE',
}

export type ModalFunction = () => {
  title: string;
  body: () => JSX.Element;
};

export type ModalContentType = {
  [key in ModalType]: ModalFunction | undefined;
}

export interface ModalContent {
  ADD_BOOK: ModalContentType[ModalType.ADD_BOOK];
  EDIT_BOOK: ModalContentType[ModalType.EDIT_BOOK];
  NONE: ModalContentType[ModalType.NONE];
}

export interface ModalProps {
  handleCloseModal: () => void;
  modalContentType: ModalType;
}