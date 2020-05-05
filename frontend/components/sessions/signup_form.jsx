import React from "react";
import { FaPlus } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";


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

  // clear errors after they show
  componentDidMount() {
    this.props.clearErrors();
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
    const errors = this.props.errors;
    let userErrors = errors.filter(error => error.includes('Username'));
    let emailErrors0 = errors.filter(error => error.includes('Email'));
    let emailErrors = emailErrors0.join(' / ');
    let passwordErrors = errors.filter(error => error.includes('Password'));
    return (
      <div id='official-signup-div'>
        <NavBarContainer />
        <div className='signin-content'>      

          <div className="auth-header-text">
            <p className="signup-header">Create your account</p>
          </div>
          <form className="auth-form" onSubmit={this.handleSubmit}>

            <div className="inputs">

              <label className="auth-form-input-label email">
                <span className="label-text">USERNAME</span>
                <input className="auth-form-input" type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="username" />
                {/* <span className="error-text">Required</span> */}
              </label>
              <div id='login-errors2'>{userErrors}</div>

              <label className="auth-form-input-label email">
                <span className="label-text">EMAIL</span>
                <input className="auth-form-input" type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="email@example.com" />
                {/* <span className="error-text">Required</span> */}
              </label>
              <div id='login-errors2'>{emailErrors}</div>

              <label className="auth-form-input-label password">
                <span className="label-text">PASSWORD</span>
                <input className="auth-form-input" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="••••••••" />
                {/* <span className="error-text">Required</span> */}
              </label>
              <div id='login-errors2'>{passwordErrors}</div>

            </div>

            <div className="bottom">
              <p>Already an user? <Link className='helpful-info' to='/login' >Sign In</Link></p>
              <input className="sign-up-button" type="submit" value="Sign Up" />
            </div>
          </form>
        </div>
        
        <div id='footer-replace1'>
          <div id='footer-help0'>Developed by Dawinder Singh</div>
          <div id='footer-help'>
            <a href="https://github.com/dawinderS/VenmoPlus" target="_blank" className='atag3'><div>Project Repo</div></a>
            <a href="https://github.com/dawinderS/VenmoPlus/blob/master/README.md" target="_blank" className='atag3'><div>Project ReadMe</div></a>
          </div>
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