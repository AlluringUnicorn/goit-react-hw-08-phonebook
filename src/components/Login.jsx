import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import css from './App.module.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'email':
        setEmail(target.value);
        break;
      case 'password':
        setPassword(target.value);
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h1>Login</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={email}
          />
        </label>
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit" className={css.btn}>
          Login
        </button>
      </form>
    </>
  );
};