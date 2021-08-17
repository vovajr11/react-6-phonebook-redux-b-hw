import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactActions from '../redux/phonebook/phonebookActions';

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
                <label className="TaskEditor-label">
                    phone
                    <input
                        className="TaskEditor-input"
                        type="number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="TaskEditor-label">
                    name
                    <input
                        className="TaskEditor-input"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit" className="TaskEditor-button">
                    Добавить заметку
                </button>
            </form>
        );
    }
}

const mapDispatch = {
    onAddContact: contactActions.addContact,
};
//  ^
// ||
// const mapDispatch = dispatch => {
//     return {
//         onAddContact: text => dispatch(contactActions.addContact(text)),
//     };
// };

export default connect(null, mapDispatch)(ContactEditor);
