import { ModalType } from "../../../types";
import { AddBook } from "./add-book/AddBook";

export const modalContent = {
  [ModalType.ADD_BOOK]: AddBook,
  [ModalType.NONE]: undefined
} 