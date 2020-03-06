import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";

export const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className='in-navbar'>
      <p>Account</p>
      <img className="splashlogo" src={window.splashlogo} />
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div className='out-navbar'>
        <img className="splashlogo" src={window.splashlogo} />
        <button className='splash-link-signup'>
          <Link to="/signup">Sign Up</Link>
        </button>
        <button className='splash-link-login'>
          <Link to="/login">Log In</Link>
        </button>
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