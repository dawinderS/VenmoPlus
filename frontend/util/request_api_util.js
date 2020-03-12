// fetchAll, fetchOne, createOne

export const fetchRequests = () => {
  return $.ajax({
    url: '/api/requests',
    method: 'GET'
  });
}

export const fetchRequest = (requestId) => {
  return $.ajax({
    url: `api/request/${requestId}`,
    method: 'GET'
  });
}

export const createRequest = (request) => {
  return $.ajax({
    url: 'api/requests',
    method: 'POST',
    data: { request }
  });
}

// export const fetchUserRequests = (user_id) => {
//   return $.ajax({
//     url: `/api/users/${user_id}/requests`,
//     method: 'GET'
//   });
// }