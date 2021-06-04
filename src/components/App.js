import React from 'react';
import AddContact from '../containers/AddContact';
import VisibleContactList from '../containers/VisibleContactList';
import Filter from '../containers/Filter';

const App = () => (
    <div>
        <AddContact />
        <VisibleContactList />
        <Filter />
    </div>
);

export default App;
