import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookThunks } from '../../redux/thunks';
import { AppDispatch, RootState } from '../../redux/store';

export const useFetchBooks = () => {
  const dispatch = useDispatch<AppDispatch>();
  const username = useSelector((state: RootState) => state.auth.auth.userInfo.username);
  const fetchBooks = useCallback(() => {
  dispatch(bookThunks.getAllBooks(username));
  }, [username, dispatch]);
  return fetchBooks;
}