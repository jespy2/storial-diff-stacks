import { modalContent } from "./modal-content";
import { useAppSelector } from "../../hooks";

import { ModalHeader } from "./modal-content/components/ModalHeader";

export const Modal = () => {
	const state = useAppSelector((state) => state);
	const { modalContentType } = state.modal;
	let _modalContent;
	if (modalContentType === "NONE") {
		_modalContent = {
			header: '',
			body: () => <></>,
		};
  } else {
		_modalContent = modalContent[modalContentType]();
	}
	const { title, body } = _modalContent;

	return (
		<div className='modal-screen-background'>
			<div className='modal-container'>
				<div className='modal-header'>
					<ModalHeader title={title ? title : ""} />
				</div>
				<div className='modal-body'>{body()}</div>
			</div>
		</div>
	);
};
