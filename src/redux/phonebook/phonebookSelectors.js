import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    },
);

const getContactById = createSelector(
    [(_, taskId) => taskId, getContacts],
    (taskId, tasks) => tasks.find(task => task.id === taskId),
);

export default {
    getContacts,
    getLoading,
    getFilter,
    getVisibleContacts,
    getContactById,
};
