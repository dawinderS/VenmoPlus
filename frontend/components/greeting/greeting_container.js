import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

// got session, entities from state
const msp = ({ session, entities: {users}}, ownProps) => ({
  currentUser: users[session.id]
})

const mdp = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(msp, mdp)(Greeting);