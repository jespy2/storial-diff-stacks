import { ModalType } from "../../../types";
import { AddBook } from "./modal-content/AddBook";
import { EditBook } from "./modal-content/EditBook";

export const modalContent = {
  [ModalType.ADD_BOOK]: AddBook,
  [ModalType.EDIT_BOOK]: EditBook,
  [ModalType.NONE]: undefined
} 