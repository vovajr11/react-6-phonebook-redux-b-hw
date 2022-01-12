import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../redux/phonebook/phonebookActions';
import contactOperations from '../redux/phonebook/phonebookOperations';
import { Form, Button } from 'react-bootstrap';

const INITIAL_STATE = {
    phone: '',
    name: '',
};

class ContactEditor extends Component {
    state = {
        ...INITIAL_STATE,
    };

    handleChange = ({ target }) => {
        const { name, value } = target;

        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { phone, name } = this.state;
        this.props.onAddContact(phone, name);

        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        return (
            <form className="TaskEditor" onSubmit={this.handleSubmit}>
                <Form.Control
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    placeholder="Phone"
                />
                <br />
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <Button
                    className="btnSubmit"
                    type="submit"
                    variant="outline-success"
                >
                    Add
                </Button>
            </form>
        );
    }
}

const mapDispatch = {
    onAddContact: contactOperations.addContact,
};
//  ^
// ||
// const mapDispatch = dispatch => {
//     return {
//         onAddContact: text => dispatch(contactActions.addContact(text)),
//     };
// };

export default connect(null, mapDispatch)(ContactEditor);
