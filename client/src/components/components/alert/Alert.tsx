import { useDispatch } from "react-redux";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { useAppSelector } from "../../../hooks";
import { closeAlert, openNotification } from "../../../redux/slices";

export const Alert = () => {
	const dispatch = useDispatch<AppDispatch>();
	const state = useAppSelector((state) => state);
	const { alert } = state;

	const onConfirm = () => {
		alert.onConfirm();
		dispatch(closeAlert());
		dispatch(openNotification({ message: alert.notificationMessage }));
	};
	return (
		<div className='alert-screen-background'>
			<div className='alert'>
				<body>
					<ExclamationCircleIcon className='alert-icon' />
					<h3>{alert.message}</h3>
				</body>
				<footer>
					<button
						className='alert-cancel-btn'
						onClick={() => dispatch(closeAlert())}
					>
						Cancel
					</button>
					<button className='alert-confirm-btn' onClick={onConfirm}>
						Confirm
					</button>
				</footer>
			</div>
		</div>
	);
};
