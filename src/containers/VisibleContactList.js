import { connect } from 'react-redux';
import { deleteContact } from '../actions/index';
import ContactList from '../components/ContactList';
import { VisibilityFilters } from '../actions/types';

const getVisibleContact = (contacts, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return contacts;

        default:
            return contacts;
            throw new Error('Unknown filter: ' + filter);
    }
};

const mapStateToProps = state => ({
    contacts: getVisibleContact(state.contacts, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
    deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
