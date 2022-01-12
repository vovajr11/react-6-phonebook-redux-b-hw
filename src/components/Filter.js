import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/phonebook/phonebookActions';
import { Form } from 'react-bootstrap';

const Filter = ({ value, onChangeFilter }) => (
    <div className="Filter">
        <Form.Control
            type="text"
            className="TaskEditor-input"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
            placeholder="Filter"
        />
    </div>
);

const mapState = state => ({
    value: state.contacts.filter,
});

const mapDispatch = {
    onChangeFilter: phonebookActions.changeFilter,
};
export default connect(mapState, mapDispatch)(Filter);
