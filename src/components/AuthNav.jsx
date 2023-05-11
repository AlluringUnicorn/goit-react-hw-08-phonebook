import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'

export const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={css.navlink} >
        <button className={css.btn} >Register</button>
      </NavLink>
      <NavLink to="/login" className={css.navlink}>
        <button className={css.btn}>Login</button>
      </NavLink>
      
    </div>
  );
};

