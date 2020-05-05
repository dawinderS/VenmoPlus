import { connect } from 'react-redux';
import { createTransaction, fetchTransactions } from '../../actions/transaction_actions';
import TransactionForm from './transaction_form'
import { fetchUser, updateUser } from '../../actions/user_action';


const msp = (state) => ({
  transaction: { user_id: '', recipient: '', amount: '', description: '' },
  currentUserId: state.session.id,
  users: Object.values(state.entities.users)
});

const mdp = (dispatch) => ({
  createTransaction: transaction => dispatch(createTransaction(transaction)),
  // fetchTransactions: () => dispatch(fetchTransactions()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  // updateUser: user => dispatch(updateUser(user))
});


const TransactionFormContainer = connect(msp, mdp)(TransactionForm);
export default TransactionFormContainer;