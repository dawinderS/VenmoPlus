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
      transaction.user.username === this.props.currentUser.username || transaction.recipient.username === this.props.currentUser.username
    );

    const usersTransactions = usersTransactionsSelect.map(transaction => {
      transaction.type = 'show';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} type='shown' />
    });

    const alltrans = () => {
      document.getElementById('trans-btn1').onclick = () => {
        // document.getElementById('all-trans').style.display = 'block';
        console.log(document.getElementById('all-trans').style.display)
        document.getElementById('users-trans').style.display = 'none';
        // document.getElementById('trans-btn3').style.display = 'none';
        let a = document.getElementsByClassName('trans-btn')
        for (let i = 0; i < a.length; i++) {
          a[i].style.backgroundColor = "#f8f8f8";
          a[i].style.color = "#999";
          a[i].style.borderColor = "#ccc";
        }
        // document.getElementById('all-trans').style.display = 'flex'
      }
      this.setState()
    }


    return (
      <div className='trans-feed'>
        <div className='trans-nav1'>
          <button className='trans-btn' id='trans-btn1' onClick={alltrans}>PUBLIC</button>
          {/* <button className='trans-btn' id='trans-btn2' >FRIENDS</button> */}
          <button className='trans-btn' id='trans-btn3' >MINE</button>
        </div>
        <div id='users-trans'>{usersTransactions}</div>
        <div id='all-trans'>{transactions}</div>
      </div>
    )
  }
}

export default TransactionIndex;