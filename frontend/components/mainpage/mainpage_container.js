import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Mainpage from './mainpage';
import { fetchTransactions } from '../../util/transaction_api_util';

const msp = state => ({
  currentUser: state.entities.users[state.session.id],
  transactions: Object.values(state.entities.transactions)
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchTransactions: () => dispatch(fetchTransactions)
});

const MainpageContainer = connect(msp, mdp)(Mainpage);
export default MainpageContainer;