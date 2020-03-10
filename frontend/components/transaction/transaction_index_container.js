import { connect } from 'react-redux';
import { fetchTransactions, clearTransactions } from '../../actions/transactions_actions';
import TransactionIndex from './transaction_index';

const msp = state => ({
  transactions: Object.values(state.entities.transactions)
})

const mdp = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactions()),
  clearTransactions: () => dispatch(clearTransactions())
})

export default connect(msp, mdp)(TransactionIndex);