import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { useAppSelector } from "../../../hooks";
import { closeNotification } from "../../../redux/slices";

export const Notification = () => {
	const dispatch = useDispatch<AppDispatch>();
	const state = useAppSelector((state) => state);
	const { notification } = state;

	useEffect(() => {
		setTimeout(() => {
			dispatch(closeNotification());
		}, 3000);
	}, []);

	return (
		<div className='notification'>
			<body>
				<ExclamationCircleIcon className='notification-icon' />
				<p>{notification.message}</p>
				<XMarkIcon
					className='notification-close-icon'
					onClick={() => dispatch(closeNotification())}
				/>
			</body>
		</div>
	);
};
