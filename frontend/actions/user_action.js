import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(
    users => dispatch(receiveUsers(users)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const fetchUser = userId => dispatch => (
  UserAPIUtil.fetchUser(userId).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const createUser = user => dispatch => (
  UserAPIUtil.createUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).then(
    user => dispatch(receiveUser(user)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const addFriend = friendId => dispatch => (
  UserAPIUtil.addFriend(friendId).then(
    friend => dispatch(receiveUser(friend)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const acceptRequest = friendId => dispatch => (
  UserAPIUtil.acceptRequest(friendId).then(
    friend => dispatch(receiveUser(friend)),
    errors => dispatch(receiveUserErrors(errors))
  )
);

export const removeFriend = friendId => dispatch => (
  UserAPIUtil.removeFriend(friendId).then(
    friend => dispatch(receiveUser(friend)),
    errors => dispatch(receiveUserErrors(errors))
  )
);




