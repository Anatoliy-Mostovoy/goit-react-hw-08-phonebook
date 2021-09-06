import React from 'react';
import Form from './Components/Form/Form';
import Contacts from './Components/Contacts/Contacts';
import Filter from './Components/Filter/Filter';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <h1 className={s.Title}>PhoneBook</h1>
      <Form />
      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <Contacts />
      <ToastContainer />
    </>
  );
};
