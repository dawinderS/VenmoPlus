import React from "react"
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import NavBarContainer from "../navbar/navbar_container";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  // clear errors after they show
  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  determineField() {
    return (e) => {
      if (e.target.value.includes('@')) {
        return 'em'
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user)
    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = { username: 'Dawinder', email: 'user@gmail.com', password: 'password' }
    this.props.login(user);
  }

  handleType(type) {
    e.preventDefault();
  
  }

  render() {
    const errors = this.props.errors
    return (
      <div id='official-signup-div'>
        <NavBarContainer />
        <div className='signin-content'>
          <div>{errors}</div>

          <div className="auth-login">
            <div className="auth-header-text">
              <p className="signup-header">Sign in to Venmo+</p>
            </div>

            <form className="auth-form" onSubmit={this.handleSubmit}>

              <div className="inputs">

                <label className="login-label">
                  <span className="login-span">USERNAME</span>
                  <input className="login-input" type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder='username' />
                  {/* <span className="a2">Required</span> */}
                </label>

                <label className="login-label">
                  <span className="login-span">PASSWORD</span>
                  <input className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="••••••••" />
                  {/* <span className="b2">Required</span> */}
                </label>

                <div className="login-bottom">
                  <button onClick={this.handleDemo} className="demo-button" id="demo-login">Demo Sign In</button>
                  <br/>
                  <div className='bottom1'>
                    <p>New to Venmo+?  <Link className='helpful-info' to='/signup' >Sign Up</Link></p>
                    <button className="submit-button">Sign In</button>
                  </div>
                </div>

              </div>

            </form>

          </div>
        </div>
        <div id='footer-replace1'>
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

export default LoginForm;