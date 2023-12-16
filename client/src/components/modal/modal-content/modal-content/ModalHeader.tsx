import { useDispatch } from "react-redux";

import { AppDispatch } from "../../../../redux/store";
import { closeModal } from "../../../../redux/slices";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const ModalHeader = ({ title }: { title: string }) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<div className='modal-header-topbar'>
				<img
					src='/storial-logo.png'
					alt='Storial Logo'
					className='modal-header-logo'
				/>
				<h1 className='modal-header-title'>{title}</h1>
				<button
					className='modal-close-btn'
					onClick={() => dispatch(closeModal())}
				>
					<XMarkIcon />
				</button>
			</div>
		</>
	);
};
