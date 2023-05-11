import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user?.name);

  return (
    <>
      <p>Welcome, {userName}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
