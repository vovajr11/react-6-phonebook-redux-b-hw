import { combineReducers } from "redux";
import contacts from "./contacts";
import visibilityFilters from "./visibilityFilter";

export default combineReducers({
  contacts,
  visibilityFilters,
});
