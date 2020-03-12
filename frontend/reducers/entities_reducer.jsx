import { combineReducers } from 'redux';

import userReducer from './user_reducer';
import transactionReducer from './transaction_reducer';
import requestReducer from './request_reducer';


const entitiesReducer = combineReducers({
  users: userReducer,
  transactions: transactionReducer,
  requests: requestReducer
});

export default entitiesReducer;