import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/index';

const AddContact = ({ dispatch }) => {
    let name = '';
    let phone = '';

    console.log(dispatch, 'dispatch');
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    // if (!input.value.trim()) {
                    //     return;
                    // }
                    dispatch(addContact(phone.value, name.value));
                    name.value = '';
                    phone.value = '';
                }}
            >
                <label>
                    Name
                    <input ref={node => (name = node)} />
                </label>
                <label>
                    Phone
                    <input ref={node => (phone = node)} />
                </label>

                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default connect()(AddContact);
