import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../redux/store';
import { toggleBookStatus } from '../../redux/slices';

export const Pill = ({ status, id }: { status: string, id: string }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div
      className={`pill-${status}`}
      onClick={() => dispatch(toggleBookStatus({id}))}
    >
      {status}
    </div>
  );
}