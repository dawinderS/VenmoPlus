import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login, receiveSessionErrors } from '../../actions/session_actions';

const msp = (state) => ({
  errors: state.errors.session
})

const mdp = (dispatch) => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(receiveSessionErrors([]))
})

const LoginFormContainer = connect(msp, mdp)(LoginForm);
export default LoginFormContainer;