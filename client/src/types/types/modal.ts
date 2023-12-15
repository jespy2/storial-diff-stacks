export enum ModalType { 
  ADD_BOOK = 'ADD_BOOK',  
  // NONE = 'NONE',
}

export type ModalFunction = () => {
  header: () => JSX.Element;
  body: () => JSX.Element;
};

export type ModalContent = {
  [key in ModalType]: ModalFunction;
}

export interface ModalProps {
  handleCloseModal: () => void;
  modalContentType: ModalType;
}