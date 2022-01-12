import React from 'react';
import { connect } from 'react-redux';

import Contact from './Contact';

const ContactList = ({ contacts }) => (
    <ul className="list">
        {contacts.map(({ id }) => (
            <Contact key={id} id={id} />
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

export default connect(mapState)(ContactList);
