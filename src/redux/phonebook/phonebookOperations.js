import axios from 'axios';
import phonebookActions from './phonebookActions';

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = (phone, name) => dispatch => {
    dispatch(phonebookActions.addContactRequest());

    axios
        .post(`/contacts`, { phone, name })
        .then(({ data }) => dispatch(phonebookActions.addContactSuccess(data)))
        .catch(error => dispatch(phonebookActions.addContactError(error)));
};

const removeContact = id => dispatch => {
    dispatch(phonebookActions.removeContactRequest());

    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(phonebookActions.removeContactSuccess(id)))
        .catch(error => dispatch(phonebookActions.removeContactError(error)));
};

const fetchContacts = () => dispatch => {
    dispatch(phonebookActions.fetchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) =>
            dispatch(phonebookActions.fetchContactSuccess(data)),
        )
        .catch(error => dispatch(phonebookActions.fetchContactError(error)));
};

export default {
    addContact,
    removeContact,
    fetchContacts,
};
