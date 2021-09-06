import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const changeFilterValue = createAction('contacts/changeFilterValue');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilterValue,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};

// const getSubmitData = data => {
//   return { type: actionTypes.SUBMIT, payload: data };
// };
// const handleDelete = data => {
//   return {
//     type: actionTypes.DELETE,
//     payload: data,
//   };
// };
// const changeFilterValue = value => {
//   return {
//     type: actionTypes.FILTER,
//     payload: value,
//   };
// };

//todo
// import { createAction } from '@reduxjs/toolkit';

// const addContactRequest = createAction('contacts/addContactRequest');
// const addContactSuccess = createAction('contacts/addContactSuccess');
// const addContactError = createAction('contacts/addContactError');

// const getSubmitData = createAction('contacts/getSubmitData');
// const handleDelete = createAction('contacts/handleDelete');
// const changeFilterValue = createAction('contacts/changeFilterValue');

// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   getSubmitData,
//   handleDelete,
//   changeFilterValue,
// };
