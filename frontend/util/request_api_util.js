// fetchAll, fetchOne, createOne

export function fetchRequests() {
  return $.ajax({
    url: '/api/requests',
    method: 'GET'
  });
}

export function fetchRequest(requestId) {
  return $.ajax({
    url: `api/request/${requestId}`,
    method: 'GET'
  });
}

export function createRequest(request) {
  return $.ajax({
    url: 'api/requests',
    method: 'POST',
    data: { request }
  });
}

// export function fetchUserRequests(user_id) {
//   return $.ajax({
//     url: `/api/users/${user_id}/requests`,
//     method: 'GET'
//   });
// }