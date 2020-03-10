import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";


const Mainpage = ({ currentUser, logout }) => {
  return (
    <div>
      <NavBarContainer />
      <p>hello</p>
      {/* <nav className="main">
        <LeftNav />
        <nav className="main-nav">
          <DashHeaderContainer />
          <BillIndexContainer />
          <nav className="main-nav-img"></nav>
        </nav>
        <RightNav />
      </nav> */}
    </div>
  )
};


export default Mainpage;