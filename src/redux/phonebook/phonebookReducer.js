import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

const addContact = (state, action) => [...state, action.payload];

const removeContact = (state, action) =>
    state.filter(contact => contact.id !== action.payload);

const items = createReducer([], {
    [phonebookActions.fetchContactSuccess]: (state, action) => action.payload,
    [phonebookActions.addContactSuccess]: addContact,
    [phonebookActions.removeContactSuccess]: removeContact,
});

const filter = createReducer('', {
    [phonebookActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
    [phonebookActions.fetchContactRequest]: () => true,
    [phonebookActions.fetchContactSuccess]: () => false,
    [phonebookActions.fetchContactError]: () => false,

    [phonebookActions.addContactRequest]: () => true,
    [phonebookActions.addContactSuccess]: () => false,
    [phonebookActions.addContactError]: () => false,

    [phonebookActions.removeContactRequest]: () => true,
    [phonebookActions.removeContactSuccess]: () => false,
    [phonebookActions.removeContactError]: () => false,
});

export default combineReducers({
    items,
    filter,
    loading,
});
