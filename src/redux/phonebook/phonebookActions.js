import { uuid } from 'uuidv4';
import actionTypes from './phonebookActionTypes';

const addContact = (phone, name) => ({
    type: actionTypes.ADD,
    payload: {
        contact: {
            id: uuid(),
            phone,
            name,
        },
    },
});

const removeContact = id => ({
    type: actionTypes.REMOVE,
    payload: {
        id,
    },
});

const changeFilter = filter => ({
    type: actionTypes.CHANGE_FILTER,
    payload: {
        filter,
    },
});

export default { addContact, removeContact, changeFilter };
