import React from "react"

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
      <div className='entry-form'>
        <div className='entry-header'></div>
        <h2>Log In</h2>
        <h3>{errors}</h3>
        <form>
          <label>Username/Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <br/>
          <button onClick={this.handleDemo}>Demo User</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;