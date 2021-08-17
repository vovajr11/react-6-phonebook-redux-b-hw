import React from 'react';
import ContactEditor from './ContactEditor';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => (
    <div>
        <h1>Phonebook</h1>
        <ContactEditor />
        <ContactList />
        <Filter />
    </div>
);

export default App;
