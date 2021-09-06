import axios from 'axios';
import actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:9999';

const fetchContact = () => dispatch => {
  dispatch(actions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(response => {
      return dispatch(actions.fetchContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(actions.addContactError(error));
    });
};

const addContacts = newContact => dispatch => {
  dispatch(actions.addContactRequest('Mother Fucker'));
  axios
    .post('/contacts', newContact)
    .then(response => {
      return dispatch(actions.addContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(actions.addContactError(error));
    });
};

const deleteContact = contactId => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios.delete(`/contacts/${contactId}`).then(() => {
    return dispatch(actions.deleteContactSuccess(contactId));
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContact, fetchContact };
