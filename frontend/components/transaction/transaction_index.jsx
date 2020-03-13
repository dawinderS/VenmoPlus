import React from 'react';
import TransactionIndexItem from './transaction_index_item';
import { logoutCurrentUser } from '../../actions/session_actions';

class TransactionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    if (!this.props.transactions) return null

    const transactions = this.props.transactions.map(transaction => (
      <TransactionIndexItem transaction={transaction} key={transaction.id} type='hidden'/>
    ));

    const usersTransactionsSelect = this.props.transactions.filter(transaction =>
      transaction.user.username === this.props.currentUser.username
    );

    const usersTransactions = usersTransactionsSelect.map(transaction => {
      transaction.type = 'show';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} type='shown' />
    });

    return (
      <div className='trans-feed'>
        <div className='trans-nav'>
          <strong>Transactions</strong>
          <button id='first-nav-btn'>PUBLIC</button>
          <button>FRIENDS</button>
          <button>MINE</button>
        </div>
        <div>{usersTransactions}</div>
        <div>{transactions}</div>
      </div>
    )
  }
}

export default TransactionIndex;