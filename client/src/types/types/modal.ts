export enum ModalType { 
  ADD_BOOK = 'ADD_BOOK',  
  NONE = 'NONE',
}

export type ModalFunction = () => {
  header: () => JSX.Element;
  body: () => JSX.Element;
};

export type ModalContentType = {
  [key in ModalType]: ModalFunction | undefined;
}

export interface ModalContent {
  ADD_BOOK: ModalContentType[ModalType.ADD_BOOK];
  NONE: ModalContentType[ModalType.NONE];
}

export interface ModalProps {
  handleCloseModal: () => void;
  modalContentType: ModalType;
}