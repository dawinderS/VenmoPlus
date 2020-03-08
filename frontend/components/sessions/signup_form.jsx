import React from "react";
import { FaPlus } from 'react-icons/fa';


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
      <div className='signin-content'>
        <div className='logo-div'>
          <img className="splashlogo1" src={window.logo1} />
          <FaPlus size={28} />
        </div>

        <div>{errors}</div>

        <form className='signup-auth-form'>
          <h3>Create your account</h3>
          <fieldset className='inputs'>
            <label className='username-label'>
              <input type="text" placeholder='username' value={this.state.username} onChange={this.handleInput('username')} />
            </label>
            <label className='email-label'>
              <input type="email" placeholder='email' value={this.state.email} onChange={this.handleInput('email')} />
            </label>
            <label className='password-label'>
              <input type="password" placeholder='password' value={this.state.password} onChange={this.handleInput('password')} />
            </label>
          </fieldset>
          <button onClick={this.handleSubmit}>Sign Up</button>
        </form>
        </div>

      // <div className='signup-with-fb'>
      //   <span className='facebook-f'></span>
      //   <span className='fb-sign-text'>Sign Up with Facebook</span>
      // </div>
    )
  }
}

export default SignupForm;