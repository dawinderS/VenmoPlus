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
        <div className='splash-info'>
          <div className='splash-mov' id='splash-mov1'>
            <video className='splash-video' autoPlay loop muted preload='auto'>
              <source src="venmo_mov.mp4" type="video/mp4" ></source>
            </video>
          </div>
          <div className='splash-mov' id='splash-mov2'>
            <img src="phonepic1.png" />
          </div>
          <div className='splash-text'> 
            <h1>
              Easily make and
              <br/>
              share payments with
              <br/>
              your friends and fam
            </h1>
            <Link className='signupnow' to="/signup">
              <div id='signuptext'>Sign Up Now</div>
            </Link>
            
          </div>
          
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