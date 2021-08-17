import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/phonebook/phonebookActions';
import Contact from './Contact';

const ContactList = ({ contacts, onRemoveContact }) => (
    <ul>
        {contacts.map(contact => (
            <Contact
                key={contact.id}
                {...contact}
                onClick={() => onRemoveContact(contact.id)}
            />
        ))}
    </ul>
);

const mapState = state => {
    const { items, filter } = state.contacts;
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = items.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );

    return {
        contacts: visibleContacts,
    };
};

const mapDispatch = {
    onRemoveContact: phonebookActions.removeContact,
};

export default connect(mapState, mapDispatch)(ContactList);
