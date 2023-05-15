import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import css from '../App.module.css';

export const PrivateRoute = ({ children, ...routeProps }) => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  if(isRefreshing){
    return <h1 className={css.loader} >Loading...</h1>

  }

  return isLoggedIn ? children : <Navigate to="/login" /> ; 
};


