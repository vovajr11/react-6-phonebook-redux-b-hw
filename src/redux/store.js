import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './phonebook/phonebookReducer';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

export default store;
