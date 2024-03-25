import { ModalType } from "../../../../types";
import { AddBook } from "./content/AddBook";
import { EditBook } from "./content/EditBook";

export const modalContent = {
  [ModalType.ADD_BOOK]: AddBook,
  [ModalType.EDIT_BOOK]: EditBook,
  [ModalType.NONE]: undefined
} 