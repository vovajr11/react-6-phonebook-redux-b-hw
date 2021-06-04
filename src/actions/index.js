import { ADD_CONTACT, DELETE_CONTACT, SET_VISIBILITY_FILTER } from './types';

let nextContactId = 0;

const addContact = (phone, name) => ({
    type: ADD_CONTACT,
    id: nextContactId++,
    phone,
    name,
});

const deleteContact = id => {
    return {
        type: DELETE_CONTACT,
        id,
    };
};

const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter,
});

export { addContact, deleteContact, setVisibilityFilter };
