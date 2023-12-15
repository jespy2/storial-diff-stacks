import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { XMarkIcon } from "@heroicons/react/24/solid";

import { RootState } from '../../redux/store';
import { ModalFunction, ModalProps } from '../../types';
import { modalContent } from './modal-content';
import { closeModal } from '../../redux/slices';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Modal = () => {
  const state = useAppSelector((state) => state);
  const { isOpen, modalContentType } = state.modal;

  let _modalContent
  if (modalContentType === "NONE") {
    _modalContent = {
        header: () => <></>,
        body: () => <></>
      };
  } else {
        _modalContent = modalContent[modalContentType]();
      }
  const { header, body } = _modalContent;
  
  return (
    <div className='modal-screen-background'>
      <div className="modal-container">
        <div className="modal-header">
          {header()} 
        <button className="modal-close-btn" onClick={() => closeModal()}><XMarkIcon /></button>
        </div>
        <div className="modal-body">{body()}</div>
      </div>
    </div>
  )
}