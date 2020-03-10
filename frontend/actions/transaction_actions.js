import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = "RECEIVE_ALL_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const CLEAR_TRANSACTIONS = "CLEAR_TRANSACTIONS";

const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

const receiveTransactionErrors = errors => ({
  type: RECEIVE_TRANSACTION_ERRORS,
  errors
});

export const clearTransactions = () => ({
  type: CLEAR_TRANSACTIONS
});

export const fetchTransactions = () => dispatch => (
  TransactionAPIUtil.fetchTransactions().then(
    transactions => dispatch(receiveTransactions(transactions)),
    errors => dispatch(receiveTransactionErrors(errors))
  )
);

export const fetchTransaction = transactionId => dispatch => (
  TransactionAPIUtil.fetchTransaction(transactionId).then(
    transaction => dispatch(receiveTransaction(transaction)),
    errors => dispatch(receiveTransactionErrors(errors))
  )
);

export const createTransaction = transaction => dispatch => (
  TransactionAPIUtil.createTransaction(transaction).then(
    transaction => dispatch(receiveTransaction(transaction)),
    errors => dispatch(receiveTransactionErrors(errors))
  )
);