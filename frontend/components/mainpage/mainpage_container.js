import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Mainpage from './mainpage';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

const MainpageContainer = connect(msp, mdp)(Mainpage);
export default MainpageContainer;