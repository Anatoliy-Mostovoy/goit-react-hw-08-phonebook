import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());
  try {
    const response = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(response.data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(response => {
  //     return dispatch(actions.fetchContactSuccess(response.data));
  //   })
  //   .catch(error => {
  //     return dispatch(actions.addContactError(error));
  //   });
};

const addContacts = newContact => async dispatch => {
  dispatch(actions.addContactRequest(''));
  try {
    const response = await axios.post('/contacts', newContact);
    dispatch(actions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
  // axios
  //   .post('/contacts', newContact)
  //   .then(response => {
  //     return dispatch(actions.addContactSuccess(response.data));
  //   })
  //   .catch(error => {
  //     return dispatch(actions.addContactError(error));
  //   });
};

const deleteContact = contactId => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }

  // axios.delete(`/contacts/${contactId}`).then(() => {
  //   return dispatch(actions.deleteContactSuccess(contactId));
  // });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContact, fetchContact };
