import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../redux/phonebook/phonebookActions';

const Filter = ({ value, onChangeFilter }) => (
    <div>
        <input
            type="text"
            className="TaskEditor-input"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
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
