import { connect } from 'react-redux';
import { createTransaction } from '../../actions/transaction_actions';
import TransactionForm from './transaction_form'

const msp = (state) => ({

});

const mdp = (dispatch) => ({
  createTransaction: (transaction) => dispatch(createTransaction(transaction))
});


export default connect(msp, mdp)(TransactionForm);