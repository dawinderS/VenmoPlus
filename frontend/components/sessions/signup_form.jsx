import React from "react"


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
        <div className='signin-form'>
          <div className='signin-header'>
            <h3>Create your account</h3>
            <div className='signup-with-fb'>
              <span className='facebook-f'></span>
              <span className='fb-sign-text'>Sign Up with Facebook</span>
            </div>
          </div>

          <div>{errors}</div>

          <form className='signup-auth-form'>
            <fieldset className='inputs'>
              <label className='username-label'>
                <div className='label-text'>Username</div>
                <input type="text" placeholder='user' value={this.state.username} onChange={this.handleInput('username')} />
              </label>
              <label className='email-label'>
                <div className='label-text'>Email</div>
                <input type="email" placeholder='user@gmail.com' value={this.state.email} onChange={this.handleInput('email')} />
              </label>
              <label className='password-label'>
                <div className='label-text'>Password</div>
                <input type="password" placeholder='•••••••' value={this.state.password} onChange={this.handleInput('password')} />
              </label>
            </fieldset>
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default SignupForm;