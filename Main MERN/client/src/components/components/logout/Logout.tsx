import { useDispatch } from "react-redux";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { logoutUser } from "../../../redux/slices";
import { Tooltip } from "../tooltip/Tooltip";
import { deleteCookies } from "../../../util";

export const Logout = () => { 
  const dispatch = useDispatch<AppDispatch>();

  const onLogout = async () => {
    await dispatch(logoutUser());
    await deleteCookies()
    window.location.reload();
   };


  return (
    <div className='logout group' >
    <Tooltip message='Log out' parent='logout' />
      <button className='logout-btn' onClick={onLogout}>
        <ArrowRightStartOnRectangleIcon
          className='logout-icon'
        />
      </button>
    </ div>
  )
};