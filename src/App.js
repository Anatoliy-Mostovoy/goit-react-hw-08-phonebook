import React from 'react';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header/Header';
import { Route, Switch } from 'react-router';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from './redux/auth/auth-operation';
import { getToken } from './redux/auth/auth-selector';
import { PablicRoute } from './Components/Route/pablic-route';
import { PrivateRoute } from './Components/Route/private-route';
export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  useEffect(() => {
    if (token === null) {
      return;
    }
    dispatch(checkUser());
  }, [dispatch, token]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          Hi! Please, log in or register
        </Route>
        <PrivateRoute exact path="/contacts" altPath="/login">
          <>
            <h1 className={s.Title}>PhoneBook</h1>
            <Form />
            <h2 className={s.Title}>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        </PrivateRoute>

        <PablicRoute path="/login" altPath="/contacts" exact>
          <Login />
        </PablicRoute>
        <PablicRoute path="/register" altPath="/contacts" exact>
          <Register />
        </PablicRoute>
      </Switch>

      <ToastContainer />
    </>
  );
};
