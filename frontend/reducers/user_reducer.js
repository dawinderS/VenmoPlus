import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  id: null,
  username: null,
  email: null,
  venmo_credit: 250.00,
  friends_with: null,
  friend_status: null,
  friendships: {
    friends: [],
    friend_requests: [],
    pending_friends: []
  },
  errors: []
}

const userReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // currentUser or user
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default userReducer;
