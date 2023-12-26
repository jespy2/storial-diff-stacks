import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { logoutUser } from "../../../redux/slices";
import { Tooltip } from "../tooltip/Tooltip";

export const Logout = () => { 
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutUser());
    localStorage.setItem("keepLoggedIn", "false");
    navigate('/');
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