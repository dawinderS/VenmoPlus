// fetch, create, update

export const fetchUsers = () => {
  return $.ajax({
    url: '/api/users',
    method: 'GET'
  })
}

export const fetchUser = (userId) => {
  return $.ajax({
    url: `api/users/${userId}`,
    method: 'GET'
  });
}

export const createUser = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
}

export const updateUser = (user) => {
  return $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  });
}

export const acceptRequest = (friendId) => {
  return $.ajax({
    url: `/api/friendships/${friendId}`,
    method: 'PATCH'
  });
}

export const addFriend = (friend_id) => {
  return $.ajax({
    url: `/api/users/${friend_id}/friendships`,
    method: 'POST'
  });
}

export const removeFriend = (friend_id) => {
  return $.ajax({
    url: `/api/friendships/${friend_id}`,
    method: 'DELETE'
  });
}

