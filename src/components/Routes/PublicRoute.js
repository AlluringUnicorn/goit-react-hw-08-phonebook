import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return !isLoggedIn ? children : <Navigate to="/" />;
};
