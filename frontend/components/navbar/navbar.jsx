import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";

export const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className='in-navbar'>
      <p>Account</p>
      <button>
        <img className="splashlogo" src={window.splashlogo} />
      </button>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div className='out-navbar'>
        <img className="splashlogo" src={window.splashlogo} />
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </div>
    );

  return (
    <div>
      <div>
        {display}
      </div>
    </div>
  )
}