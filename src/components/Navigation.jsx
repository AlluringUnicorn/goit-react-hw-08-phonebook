import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

export const Navigation = () => {
  
  return (
    <div className={css.container}>
      <NavLink to="/">
        <button className={css.btn}>Home</button>
      </NavLink>
      <NavLink to="/contacts">
        <button className={css.btn}>Contacts</button>
      </NavLink>
    </div>
  );
};




