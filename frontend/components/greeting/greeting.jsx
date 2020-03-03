import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Greeting = ({ currentUser, logout, history }) => {

  return (
    <div>hello user</div>
  )
}

export default withRouter(Greeting);