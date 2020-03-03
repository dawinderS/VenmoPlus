import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.currentUser === undefined) {
      return (
        <div>
          <Link to="/signup" ></Link>
          <Link to="/login"></Link>
        </div>
      );
    } else {
      return (
        <div>
          <div>Welcome, {this.props.currentUser.username}</div>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;