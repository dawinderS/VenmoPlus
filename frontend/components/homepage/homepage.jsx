import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='main-splash'>
        <NavBarContainer />
        <div className='mid-splash'>
          <img className='splashbackground' src={window.splash3} />
          <img className='splashbackground2' src={window.splash1} />
        </div>
        
        
      </div>
    )
  }
}

export default Homepage;