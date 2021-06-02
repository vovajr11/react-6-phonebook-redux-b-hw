import React from 'react';

const Contact = ({ onClick, phone, name }) => (
    <li>
        <div>
            <p>{phone}</p>
            <p>{name}</p>
        </div>
        <button onClick={onClick} type="button">
            Deleted
        </button>
    </li>
);

export default Contact;
