import { RegisterForm } from './Register';
import { Login } from './Login';
import { Route, Routes } from 'react-router';
import { HomePage } from './HomePage/HomePage';
import { Contacts } from './Contacts/Contacts';
import { AppBar } from './AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (


    <>
      <AppBar />

      {
    isRefreshing ? (
      '...Loading'
    )
    : 

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>}
    </>
  );
};

export default App;
