import {
  fetchInProgress,
  fetchingSuccess,
  fetchingError,
} from './contactsSlice';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = () => async dispatch => {
  try {
    dispatch(fetchInProgress());
    const data = await axios.get('contacts');
    dispatch(fetchingSuccess(data.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

const addContact = contactData => async dispatch => {
  try {
    dispatch(fetchInProgress());
    await axios.post('/contacts', contactData);
    dispatch(getContacts());
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

const deleteContact = contactId => async dispatch => {
  try {
    dispatch(fetchInProgress());
    await axios.delete(`/contacts/${contactId}`);
    dispatch(getContacts());
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};

export { getContacts, addContact, deleteContact };
