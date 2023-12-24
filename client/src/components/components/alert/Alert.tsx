import { useDispatch } from "react-redux";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { useAppSelector } from "../../../hooks";
import { closeAlert, openNotification } from "../../../redux/slices";

export const Alert = () => {
	const dispatch = useDispatch<AppDispatch>();
	const alertState = useAppSelector((state) => state.alert);

	const onConfirm = () => {
		alertState.onConfirm();
		dispatch(closeAlert());
		dispatch(openNotification({ message: alertState.notificationMessage }));
	};
	return (
		<div className='alertState-screen-background'>
			<div className='alertState'>
				<body>
					<ExclamationCircleIcon className='alertState-icon' />
					<h3>{alertState.message}</h3>
				</body>
				<footer>
					<button
						className='alertState-cancel-btn'
						onClick={() => dispatch(closeAlert())}
					>
						Cancel
					</button>
					<button className='alertState-confirm-btn' onClick={onConfirm}>
						Confirm
					</button>
				</footer>
			</div>
		</div>
	);
};
