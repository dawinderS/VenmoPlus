import React from "react";
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user) // .then(this.props.history.push("/"))
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
            <h3 id='create-acct'>Create your account</h3>
            <input type="text" placeholder='username' value={this.state.username} onChange={this.handleInput('username')} />
            <input type="email" placeholder='email' value={this.state.email} onChange={this.handleInput('email')} />
            <input type="password" placeholder='password' value={this.state.password} onChange={this.handleInput('password')} />
            <div id='signup-button' onClick={this.handleSubmit}>
              <div id='signup-button-text'>Sign Up</div>
            </div>
            <div id='already-user'>
              Already an user? 
              <Link to='/login' >Log In</Link>
            </div>
            
          </form>
        </div>
      </div>

      // <div className='signup-with-fb'>
      //   <span className='facebook-f'></span>
      //   <span className='fb-sign-text'>Sign Up with Facebook</span>
      // </div>
    )
  }
}

export default SignupForm;