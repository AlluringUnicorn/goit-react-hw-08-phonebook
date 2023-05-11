import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Navigation = () => {
  return (
    <>
      <NavLink to="/">
        <Button>Home</Button>
      </NavLink>
      <NavLink to="/register">
        <Button>Register</Button>
      </NavLink>
      <NavLink to="/login">
        <Button>Login</Button>
      </NavLink>
      <NavLink to="/contacts">
        <Button>To Contacts</Button>
      </NavLink>
    </>
  );
};
