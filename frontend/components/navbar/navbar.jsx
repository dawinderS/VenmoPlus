import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";
import { IoIosMenu, IoMdSearch } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa';

export const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className='in-navbar'>
      <div id='navholder'>
        <div className='logo-menu1'>
          <Link id='homelink' to='/' replace>
            <div className='logo-div'>
              <img className="splashlogo1" src={window.logo1} />
              <div id='faplusicon'>
                <FaPlus size={19} color='white' />
              </div>
            </div>
          </Link>
          <input className='nav-search' type="search" placeholder='Search people' />
          <Link className='nav-home-link' to='/' replace><div>Home</div></Link>
        </div>
        <div className='logo-links1'>
          <Link className='nav-home-link' id='navusername' to='/' replace><div>{currentUser.username}</div></Link>
          <Link className='nav-home-link' to='/' replace><div>Statement</div></Link>
          {/* <a href="https://www.linkedin.com/in/dawinder-singh/" target="_blank" className='nav-home-link'><div>LinkedIn</div></a> */}
          <a href="https://www.dawindersingh.com/#cta" target='_blank' className='nav-home-link' ><div>Contact me</div></a>
          <div className='nav-home-link' onClick={logout}>Log out</div>
          {/* <Link className='logout-link' to="/login">
              <div id='login-text'>Log In</div>
            </Link> */}
        </div>
      </div>
    </div>

  ) : (

      <div className='out-navbar'>
        <div className='logo-menu'>
          <div className='logo-menu-icon'>
            {/* <IoIosMenu size={26} /> */}
            <div className='logo-menu-content'>
              <p>What's New</p>
              <p>How Venmo Works</p>
              <p>Business</p>
              <p>Security</p>
              <p>Contact Us</p>
            </div>
          </div>
          <Link id='homelink' to='/' replace>
            <div className='logo-div'>
              <img className="splashlogo" src={window.splashlogo} />
              <div id='faplusicon'>
                <FaPlus />
              </div>
            </div>
          </Link>
        </div>
        <div className='logo-links'>
          <a href="https://github.com/dawinderS/" target="_blank" className='atag'><span>Github</span></a>
          <a href="https://www.linkedin.com/in/dawinder-singh/" target="_blank" className='atag'><span>LinkedIn</span></a>
          <a href="https://www.dawindersingh.com/#cta" target='_blank' className='atag' id='mailref'><span>Contact Me</span></a>
          <Link className='signup-link' to="/login" replace>
            <div id='signup-now-text'>Sign In</div>
          </Link>
          {/* <Link className='logout-link' to="/login">
            <div id='login-text'>Log In</div>
          </Link> */}
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