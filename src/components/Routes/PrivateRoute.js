import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, ...routeProps }) => {

  const token = useSelector(state => state.auth.token);

  return token ? children : <Navigate to="/login" />; 
};
