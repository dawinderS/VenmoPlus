import { 
  RECEIVE_TRANSACTIONS, 
  RECEIVE_TRANSACTION,
} from '../actions/transaction_actions';

const transactionReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return action.transactions;
    case RECEIVE_TRANSACTION:
      return action.transaction
    default:
      return state;
  }
}

export default transactionReducer;