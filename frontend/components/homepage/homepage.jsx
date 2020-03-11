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
          <div className='splash-info1'>
            <h3>The future of payments</h3>
            <p></p>
          </div>
          <img className='splashbackground2' src={window.splash1} />
        </div>
        <div className='splash-info2'>
          <h2>part 2</h2>
        </div>
        <div className='footer-holder'>  
          <div className='footer'>
            <div className='footer1'>
              <h4>Learn more</h4>
              <div>How it works</div>
              <div>Our Fees</div>
              <div>Business</div>
              <div>Card</div>
              <div>Security</div>
              <div>Contact Us</div>
            </div>
            <div className='footer1'>
              <h4>Company</h4>
              <div>Our Team</div>
              <div>Jobs</div>
            </div>
            <div className='footer1'>
              <h4>Community</h4>
              <div>Blog</div>
              <div>Help Center</div>
              <div>Developer</div>
            </div>
            <div className='footer1'>
              <h4>Terms</h4>
              <div>Legal</div>
              <div>Privacy</div>
            </div>
            <img id='splash-apple-logo' src="get-it-on-apple.png"/>
            <img id='splash-android-logo' src="get-it-on-android.png"/>
          </div>
        </div>
        <div className='below-footer'>
          <div>Venmo+ is a service of PayPal, Inc., a licensed provider of money transfer services (NMLS ID: 910457). All money transmission is provided by PayPal, Inc. pursuant to PayPal, Inc.’s licenses. © 2020 PayPal, Inc.</div>
        </div>
        <div id='footer-replace'>
          <div id='footer-help0'>Copyright © Venmo+.</div>
          <div id='footer-help'>Help</div>
          <div id='footer-help2'>Security</div>
        </div>
        
      </div>
    )
  }
}

export default Homepage;