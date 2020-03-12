import { connect } from 'react-redux';
import { createTransaction, fetchTransactions } from '../../actions/transaction_actions';
import TransactionForm from './transaction_form'

const msp = (state) => ({
  transaction: { user_id: '', recipient: '', amount: '', description: '' },
  currentUserId: state.session.id,
  users: Object.values(state.entities.users)
});

const mdp = (dispatch) => ({
  createTransaction: transaction => dispatch(createTransaction(transaction)),
  fetchTransactions: () => dispatch(fetchTransactions())
});


const TransactionFormContainer = connect(msp, mdp)(TransactionForm);
export default TransactionFormContainer;