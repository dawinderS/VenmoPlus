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
          <span className='splash-phones'>
            <img className="splash-android" src={window.splash1} />
            <img className="splash-iphone" src={window.splash2} />
            <p>Send money and make purchases at approved merchants</p>
            <button>x</button>
          </span>
        </div>
        
        <p>below navbar</p>
      </div>
    )
  }
}

export default Homepage;