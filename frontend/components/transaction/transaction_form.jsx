import React from 'react';
import { Link, withRouter } from 'react-router';

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.transaction;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.invalidTransactionInput = this.invalidTransactionInput.bind(this)
    this.validAmount = this.validAmount.bind(this);
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
    // if (!this.state.recipient_id) errors.push("invalid recipient");
    if (!this.state.amount) errors.push("amount can't be blank");
    if (!this.state.description) errors.push("must give description");
    if (!this.validAmount()) errors.push("not a valid amount");
    if (errors.length === 0) return false;
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  clearForm() {
    this.setState({
      user_id: '',
      recipient: '',
      amount: '',
      description: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault()

    const transaction = {
      user_id: this.props.currentUserId,
      recipient: this.state.recipient,
      amount: this.state.amount,
      description: this.state.description
    };
    if (this.invalidTransactionInput()) {
      console.log(this.state.errors)
    } else {
      this.props.createTransaction(transaction).then(
        () => { this.clearForm() } 
      );
    }
  }

  render() {
    return (
      <div className='trans-top'>
        <div className="all-trans-form1">
          <div className='trans-form1'>
            <div>{this.invalidTransactionInput()}</div>
            <div className="form-inputs">
              <div className='recipient-div'>
                <input type="text"
                  placeholder='username'
                  value={this.state.recipient}
                  onChange={this.handleInput('recipient')} />
              </div>
              <div className="transaction-description">
                <input id="transaction-des"
                  placeholder="What's it for?"
                  value={this.state.description}
                  onChange={this.handleInput('description')}>
                </input>
              </div>
            </div>
            <div className='trans-form2'>
              <div className='form-amount'>
                <input type="pay-amount"
                  onChange={this.handleInput('amount')}
                  placeholder="$0"
                  value={this.state.amount} />
              </div>
            </div>
          </div>
        </div>
        <div className='trans-nav'>
          <strong className='transaction-form-btn2' onClick={(e) => this.handleSubmit(e)} >Pay</strong>
          <div className='trans-nav-mid'></div>
          <strong className='transaction-form-button' onClick={(e) => this.handleSubmit(e)} >Request</strong>
        </div>
      </div>
    );
  }
}

export default withRouter(TransactionForm);
