import React from 'react';

const Filter = ({ value, setVisibilityFilter }) => {
    return (
        <div>
            <input
                type="text"
                className="TaskEditor-input"
                value={value}
                // onChange={e => dispatch(addContact(phone.value, name.value))}
            />
        </div>
    );
};
export default Filter;
