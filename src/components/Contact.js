import React from 'react';
import { connect } from 'react-redux';
import phonebookOperations from '../redux/phonebook/phonebookOperations';
import { Button } from 'react-bootstrap';

const Contact = ({ phone, name, onRemove }) => (
    <li className="contactItem">
        <div>
            <p>{name}</p>
            <p>{phone}</p>
        </div>

        <Button onClick={onRemove} type="button" variant="danger">
            Deleted
        </Button>
    </li>
);

const mapState = (state, ownProps) => {
    const item = state.contacts.items.find(item => item.id === ownProps.id);

    return { ...item };
};

const mapDispatch = (dispatch, ownProps) => ({
    onRemove: () => dispatch(phonebookOperations.removeContact(ownProps.id)),
});

export default connect(mapState, mapDispatch)(Contact);
