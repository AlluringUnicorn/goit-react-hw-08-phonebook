import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, ...routeProps }) => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn);

  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to="/login" /> : children; 
};
