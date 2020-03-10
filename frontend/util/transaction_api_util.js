// fetchAll, fetchOne, createOne

export function fetchTransactions() {
  return $.ajax({
    url: '/api/transactions',
    method: 'GET'
  });
}

export function fetchTransaction(transactionId) {
  return $.ajax({
    url: `api/transactions/${transactionId}`,
    method: 'GET'
  });
}

export function createTransaction(transaction) {
  return $.ajax({
    url: 'api/transactions',
    method: 'POST',
    data: { transaction }
  });
}

// export function fetchUserTransactions(user_id) {
//   return $.ajax({
//     url: `/api/users/${user_id}/transactions`,
//     method: 'GET'
//   });
// }