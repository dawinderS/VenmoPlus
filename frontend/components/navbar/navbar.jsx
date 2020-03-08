import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import { IoIosMenu } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';

export const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className='in-navbar'>
      <p>Account</p>
      <div className='logo-div'>
        <img className="splashlogo" src={window.splashlogo} />
        <Link to='/'></Link>
        <FaPlus />
      </div>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <div className='out-navbar'>
        <div className='logo-menu'>
          <div className='logo-menu-icon'>
            <IoIosMenu size={26} />
          </div>
          <div className='logo-div'>
            <img className="splashlogo" src={window.splashlogo} />
            <Link to='/'></Link>
            <FaPlus />
          </div>
        </div>
        <div id='nav-text1'>Redesigned.</div>
        <div id='nav-text2'>Simplified.</div>
        <div className='splash-link-signup'>
          <Link className='signup-link' to="/signup">
            <div id='signup-now-text'>Sign Up Now</div>
          </Link>
        </div>
        <div className='splash-link-login'>
          <Link className='logout-link' to="/login">
            <div id='login-text'>Log In</div>
          </Link>
        </div>
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