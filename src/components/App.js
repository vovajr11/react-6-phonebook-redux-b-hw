import React, { Component } from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebookOperations';
import ContactEditor from './ContactEditor';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
    componentDidMount() {
        this.props.onFetchTasks();
    }

    render() {
        return (
            <section>
                <h1>Phonebook</h1>
                <div className="flex">
                    <ContactEditor />
                    {this.props.isLoadingContacts && <h1>LOADING...</h1>}
                    <ContactList />
                </div>
                <Filter />
            </section>
        );
    }
}

const mapState = state => ({
    isLoadingContacts: state.contacts.loading,
});

const mapDispatch = {
    onFetchTasks: phonebookOperations.fetchContacts,
};

export default connect(mapState, mapDispatch)(App);
