import { ADD_CONTACT, DELETE_CONTACT } from "../actions/types";

const contacts = (state = [], { type, id, phone, name }) => {
  switch (type) {
    case ADD_CONTACT:
      return [
        ...state,
        {
          id,
          name,
          phone,
        },
      ];

    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== id);

    default:
      return state;
  }
};

export default contacts;
