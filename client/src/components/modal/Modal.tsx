import { ModalFunction, ModalProps } from '../../types';
import { modalContent } from './modal-content';
import { XMarkIcon } from "@heroicons/react/24/solid";

export const Modal = (props: ModalProps) => {
  const { handleCloseModal, modalContentType } = props;
  const modal_content = modalContent[modalContentType]();
  const { header, body } = modal_content;
  
  return (
    <div className='modal-screen-background'>
      <div className="modal-container">
        <div className="modal-header">
          {header()} 
        <button className="modal-close-btn" onClick={() => handleCloseModal()}><XMarkIcon /></button>
        </div>
        <div className="modal-body">{body()}</div>
      </div>
    </div>
  )
}