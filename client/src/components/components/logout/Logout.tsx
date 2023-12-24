import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

import { AppDispatch } from "../../../redux/store";
import { logoutUser } from "../../../redux/slices";

export const Logout = () => { 
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logoutUser());
    navigate('/');
   };


  return (
    <>
      <button className='logout-btn' onClick={onLogout}>
        <ArrowRightStartOnRectangleIcon
          className='logout-icon'
        />
      </button>
    </>
  )
};