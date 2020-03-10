import React from 'react';
import TransactionIndexItem from './transaction_index_item';

class TransactionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTransactions()
  }

  render() {
    if (!this.props.transactions) return null
    
    const transactions = this.props.transactions.map(transaction => (
      <TransactionIndexItem transaction={transaction} key={transaction.id} />
    ));

    return (
      <div>
        <ul>{transactions}</ul>
      </div>
    )
  }
}

export default TransactionIndex;