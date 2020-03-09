import React from "react"
import { Link } from "react-router-dom";
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';

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

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = { username: 'user', email: 'user@gmail.com', password: 'password' }
    this.props.login(user);
  }

  handleType(type) {
    e.preventDefault();
  
  }

  render() {
    const errors = this.props.errors
    return (
      <div id='official-signup-div'>
        <div id='space-creator'></div>
        <div className='signin-content'>
          <Link to='/'>
            <div className='logo-div'>
              <img className="splashlogo1" src={window.logo1} />
              <FaPlus color='black' size={28} />
            </div>
          </Link>

          <div>{errors}</div>

          <form className='signup-form'>
            <div id='login-circle'>
              <FaUserCircle size={65} />
            </div>
            <h3 id='create-acct'>Welcome back!</h3>
            <input type="text" placeholder='username' value={this.state.username} onChange={this.handleInput('username')} />
            {/* <input type="email" placeholder='email' value={this.state.email} onChange={this.handleInput('email')} /> */}
            <input type="password" placeholder='password' value={this.state.password} onChange={this.handleInput('password')} />
            <div id='signin-demo-btns'>
              <div id='signup-button' onClick={this.handleSubmit}>
                <div id='signup-button-text'>Log In</div>
              </div>
              <div id='signup-button2' onClick={this.handleDemo}>
                <div id='signup-button-text'>Demo User</div>
              </div>
            </div>
            <div id='already-user'>
              Not a user yet?
              <Link to='/signup' >Sign Up</Link>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;