import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('phoneBook/addRequest');
const addContactSuccess = createAction('phoneBook/addSuccess');
const addContactError = createAction('phoneBook/addError');

const removeContactRequest = createAction('phoneBook/removeRequest');
const removeContactSuccess = createAction('phoneBook/removeSuccess');
const removeContactError = createAction('phoneBook/removeError');

const fetchContactRequest = createAction('phoneBook/fetchRequest');
const fetchContactSuccess = createAction('phoneBook/fetchSuccess');
const fetchContactError = createAction('phoneBook/fetchError');


const changeFilter = createAction('phoneBook/changeFilter');

export default {
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError,
    changeFilter,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
};
