import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import css from './AppBar.module.css';


export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header className={css.header} >
      <Navigation />
            {isLoggedIn && <UserMenu />}
      <AuthNav />

    </header>
  );
};
