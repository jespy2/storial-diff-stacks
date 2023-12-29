import { AppDispatch } from '../../redux/store';
import { authThunks } from '../../redux/thunks';

export const cookieCreator = async (dispatch: AppDispatch, username: string) => {
    const userInfo = await dispatch(authThunks.getUser(username));
    document.cookie = "keepLoggedIn=true; max-age=(60 * 60 * 24 * 30); SameSite=None;Secure";
    document.cookie = `userName=${userInfo.payload.data.username}; max-age=(60 * 60 * 24 * 30); SameSite=None;Secure`;
    document.cookie = `email=${userInfo.payload.data.email}; max-age=(60 * 60 * 24 * 30); SameSite=None;Secure`;
    document.cookie = `password=${userInfo.payload.data.password}; max-age=(60 * 60 * 24 * 30); SameSite=None;Secure`;
};  