import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from "actions/session_actions";

// NOTE: action.errors is an array!!
const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return [];
      }
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;