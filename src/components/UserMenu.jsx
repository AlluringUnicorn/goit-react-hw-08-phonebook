import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import css from './UserMenu.module.css'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.user?.name);

  return (
    <>
      <p className={css.user} >Welcome, {userName}</p>
      <button className={css.btn} onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
