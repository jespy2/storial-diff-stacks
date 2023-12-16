import { modalContent } from './modal-content';
import { useAppSelector } from '../../hooks';

export const Modal = () => {
  const state = useAppSelector((state) => state);
  const { modalContentType } = state.modal;

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
        </div>
        <div className="modal-body">{body()}</div>
      </div>
    </div>
  )
}