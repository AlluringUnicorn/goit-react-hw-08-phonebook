import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, ...routeProps }) => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  console.log(isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" /> ; 
};
