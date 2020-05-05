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
              <h4>About Me</h4>
              <a href="https://github.com/dawinderS/" target="_blank" className='atag1'><div>Github</div></a>
              <a href="https://www.linkedin.com/in/dawinder-singh/" target="_blank" className='atag1'><div>LinkedIn</div></a>
              <a href="https://www.dawindersingh.com/#cta" target='_blank' className='atag1'><div>Contact Me</div></a>
            </div>
            <div className='footer1'>
              <h4>About Project</h4>
              <a href="https://github.com/dawinderS/VenmoPlus" target="_blank" className='atag1'><div>Repo</div></a>
              <a href="https://github.com/dawinderS/VenmoPlus/blob/master/README.md" target="_blank" className='atag1'><div>ReadMe</div></a>
            </div>
            <div className='footer1'>
              <h4>Useful Links</h4>
              <Link className='footerlinks' to="/signup">
                <div >Sign Up</div>
              </Link>
              <Link className='footerlinks' to='/login'>
                <div>Sign In</div>
              </Link>
              <Link className='footerlinks' to='/'>
                <div>Home</div>
              </Link>
            </div>
            
            <a href="https://apps.apple.com/us/app/venmo/id351727428" target="_blank" >
              <img id='splash-apple-logo' src="get-it-on-apple.png" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.venmo&hl=en_US" target="_blank" >
              <img id='splash-android-logo' src="get-it-on-android.png" />
            </a>
          </div>
        </div>
        <div className='below-footer'>
          {/* <div>Venmo+ is a service of PayPal+, Inc., a licensed provider of money transfer services (NMLS ID: 910457). All money transmission is provided by PayPal+, Inc. pursuant to PayPal+, Inc.’s licenses. © 2020 PayPal+, Inc.</div> */}
          <div>Venmo+ is a digit wallet inspired by Venmo and developed by Dawinder Singh. It was created utlizing Ruby on Rails for backend, React.js/Redux for frontend, and PostgreSQL for data storage.</div>
        </div>
        <div id='footer-replace'>
          <div id='footer-help0'>Developed by Dawinder Singh</div>
          <div id='footer-help'>
            <a href="https://github.com/dawinderS/VenmoPlus" target="_blank" className='atag3'><div>Project Repo</div></a>
            <a href="https://github.com/dawinderS/VenmoPlus/blob/master/README.md" target="_blank" className='atag3'><div>Project ReadMe</div></a>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Homepage;