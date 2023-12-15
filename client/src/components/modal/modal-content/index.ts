import { ModalContent, ModalType } from "../../../types";
import { AddBook } from "./AddBook";



export const modalContent = {
  [ModalType.ADD_BOOK]: AddBook,
  [ModalType.NONE]: undefined
} 