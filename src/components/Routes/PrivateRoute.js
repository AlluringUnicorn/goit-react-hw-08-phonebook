import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, ...routeProps }) => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn);

  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  console.log(isRefreshing);

  const mustRedirect = !isLoggedIn && !isRefreshing;

  console.log(mustRedirect);

  return mustRedirect ? <Navigate to="/login" /> : children; 
};
