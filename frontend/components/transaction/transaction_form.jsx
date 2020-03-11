import React from 'react';
import { Link, withRouter } from 'react-router';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipient: '', //this.props.user,
      amount: '',
      description: '',
      errors: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.invalidTransactionInput = this.invalidTransactionInput.bind(this)
    this.validAmount = this.validAmount.bind(this);
    // this.setRecipient = this.setRecipient.bind(this);
  }

  validAmount() {
    if (this.state.amount > 0 || typeof this.state.amount === 'number') {
      return true;
    } else {
      return false;
    }
  }


// can I do these errors elsewhere, how? trasaction_errors_reducer?
  invalidTransactionInput() {
    const errors = [];
    if (!this.state.recipient.id) errors.push("invalid recipient");
    if (!this.state.amount) errors.push("amount can't be blank");
    if (!this.state.description) errors.push("must give description");
    if (!this.validAmount()) errors.push("not a valid amount");
    if (errors.length === 0) return false;

    this.setState({ errors: errors });
    return true;
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  setRecipient(user) {
    this.setState({ recipient: { username: user.username, id: user.id } });
  }

  clearForm() {
    this.setState({
      recipient: { username: '', id: null },
      amount: '',
      description: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault()
  
    if (this.invalidTransactionInput()) {
      console.log(this.state.errors)
    } else {
      this.props.createTransaction(transaction).then(
        () => { this.clearForm() } 
      );
      this.clearForm();
    }
  }

  render() {
    return (
      <div id="transaction-form">
        <form className='transaction-form'>
          <ul className='transaction-form-errors'>
            {this.state.errors.map((err, i) => (
              <li className='transaction-error' key={i}>{err}</li>
            ))}
          </ul>
          <div className="form-inputs">
            <div className="form-main">
              <div className='form-amount'>
                <input type="number"
                  onChange={this.handleInput('amount')}
                  placeholder="0.00"
                  value={this.state.amount} />
              </div>
              <div className='form-recipient'>

              </div>
            </div>
            <div className="transaction-description">
              <textarea id="transaction-des"
                placeholder="for pizza!"
                value={this.state.description}
                onChange={this.handleInput('description')}>
              </textarea>
            </div>
          </div>
          <button id='transaction-form-button' onClick={this.handleSubmit} >Pay</button>
        </form>
      </div>
    );
  }
}

export default withRouter(TransactionForm);
