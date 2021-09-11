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

console.log(Register);
export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/contacts">
          <>
            <h1 className={s.Title}>PhoneBook</h1>
            <Form />
            <h2 className={s.Title}>Contacts</h2>
            <Filter />
            <Contacts />
          </>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>

      <ToastContainer />
    </>
  );
};
