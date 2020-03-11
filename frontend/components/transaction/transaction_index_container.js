import { connect } from 'react-redux';
import { fetchTransactions, clearTransactions } from '../../actions/transaction_actions';
import TransactionIndex from './transaction_index';

const msp = state => ({
  transactions: Object.values(state.entities.transactions)
})

const mdp = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactions()),
  clearTransactions: () => dispatch(clearTransactions())
})

const TransactionIndexContainer = connect(msp, mdp)(TransactionIndex);
export default TransactionIndexContainer;