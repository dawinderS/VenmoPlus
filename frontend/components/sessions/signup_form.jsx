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
    this.props.signup(user)//.then(this.props.history.push("/"))
  }

  render() {
    const errors = this.props.errors
    return (
      <div>
        <h3>Sign Up</h3>
        <div>{errors}</div>
        <form>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleInput('username')} />
          </label>
          <label>Email:
            <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;