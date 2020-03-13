import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import { IoIosMenu, IoMdSearch } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';

export const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className='in-navbar'>
      <div className='logo-menu1'>
        <div className='logo-div'>
          <img className="splashlogo" src={window.logo1} />
          <Link to='/'></Link>
          <FaPlus color='white' />
        </div>
        <div className='nav-search-bar'>
          <input className='nav-search' type="search" placeholder='Search people' />
          <div className='nav-search-icon'><IoMdSearch /></div>
        </div>
        <Link className='nav-home-link' to='/'><div>Home</div></Link>
      </div>
      <div className='nav-left-side'>
        <span className='nav-user-link'>{currentUser.username}</span>
        <div>Statement</div>
        <div>Settings</div>
        <div>Help</div>
        <div onClick={logout}>Log Out</div>
      </div>
    </div>
  ) : (
      <div className='out-navbar'>
        <div className='logo-menu'>
          <div className='logo-menu-icon'>
            <IoIosMenu size={26} />
            <div className='logo-menu-content'>
              <p>What's New</p>
              <p>How Venmo Works</p>
              <p>Business</p>
              <p>Security</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className='logo-div'>
            <img className="splashlogo" src={window.splashlogo} />
            <Link to='/'></Link>
            <FaPlus />
          </div>
        </div>
        <div id='nav-text1'>Redesigned.</div>
        <div id='nav-text2'>Simplified.</div>
        <Link className='signup-link' to="/signup">
          <div id='signup-now-text'>Sign Up Now</div>
        </Link>
        <Link className='logout-link' to="/login">
          <div id='login-text'>Log In</div>
        </Link>
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