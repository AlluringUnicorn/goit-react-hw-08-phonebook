import { useSelector } from 'react-redux';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';


export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

