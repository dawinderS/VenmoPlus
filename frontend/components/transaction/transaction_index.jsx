import React from 'react';
import TransactionIndexItem from './transaction_index_item';
import { logoutCurrentUser } from '../../actions/session_actions';

class TransactionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.trans = this.trans.bind(this);
    this.mine = this.mine.bind(this);
    // this.friends = this.friends.bind(this);
    this.enter = this.enter.bind(this);
    this.leave = this.leave.bind(this);
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  enter(e) {
    e.target.style.color = '#3d95ce';
    e.target.style.border = '1px solid #3d95ce';
  }

  leave(e) {
    if (e.target.style.color !== 'rgb(72, 132, 247)') {
      e.target.style.color = '#999';
      e.target.style.border = '1px solid #ccc';
    } else {
      e.target.style.color = '#4884f7';
      e.target.style.border = '1px solid #adccf7'
    }
  }

  trans() {
    let allBtn = document.getElementById('trans-btn1');
    let publicc = document.getElementById('all-trans');
    
    let all = document.getElementsByClassName('trans-index-show');
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none';
    }
    publicc.style.display = 'flex';
    publicc.style.flexDirection = 'column';

    let a = document.getElementsByClassName('trans-btn')
    for (let i = 0; i < a.length; i++) {
      a[i].style.backgroundColor = "#f8f8f8";
      a[i].style.color = "#999";
      a[i].style.borderColor = "#ccc";
    }

    allBtn.style.backgroundColor = '#e9f4fa';
    allBtn.style.color = '#4884f7';
    allBtn.style.border = '1px solid #adccf7';    
  }

  mine() {
    let usersBtn = document.getElementById('trans-btn3');
    let mine = document.getElementById('users-trans');

    let all = document.getElementsByClassName('trans-index-show');
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none';
    }
    mine.style.display = 'flex';
    mine.style.flexDirection = 'column';

    let a = document.getElementsByClassName('trans-btn')
    for (let i = 0; i < a.length; i++) {
      a[i].style.backgroundColor = "#f8f8f8";
      a[i].style.color = "#999";
      a[i].style.borderColor = "#ccc";
    }

    usersBtn.style.backgroundColor = '#e9f4fa';
    usersBtn.style.color = '#4884f7';
    usersBtn.style.border = '1px solid #adccf7';
  }

  friends() {
    let friendsBtn = document.getElementById('trans-btn2');
    let friends = document.getElementById('friends-trans');

    let all = document.getElementsByClassName('trans-index-show');
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = 'none';
    }
    friends.style.display = 'flex';
    friends.style.flexDirection = 'column';

    let a = document.getElementsByClassName('trans-btn')
    for (let i = 0; i < a.length; i++) {
      a[i].style.backgroundColor = "#f8f8f8";
      a[i].style.color = "#999";
      a[i].style.borderColor = "#ccc";
    }

    friendsBtn.style.backgroundColor = '#e9f4fa';
    friendsBtn.style.color = '#4884f7';
    friendsBtn.style.border = '1px solid #adccf7';
  }


  render() {
    if (!this.props.transactions) return null;

    const publicTrans = this.props.transactions.filter(transaction =>
      transaction.user.username != this.props.currentUser.username && transaction.recipient.username != this.props.currentUser.username
    );

    const publicTransactions = publicTrans.map(transaction => {
      transaction.type = 'hide';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} />
    });

    const friendsTrans = this.props.transactions.filter(transaction =>
      transaction.user.username === this.props.currentUser.username || transaction.recipient.username === this.props.currentUser.username
    );

    const friendsTransactions = friendsTrans.map(transaction => {
      transaction.type = 'hide';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} />
    });

    const usersTrans = this.props.transactions.filter(transaction =>
      transaction.user.username === this.props.currentUser.username || transaction.recipient.username === this.props.currentUser.username
    );

    const usersTransactions = usersTrans.map((transaction, i) => {
      transaction.type = 'show';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} />
    });

    console.log(usersTransactions)
    console.log(friendsTransactions)

    return (
      <div className='trans-feed'>
        <div className='trans-nav1'>
          <button className='trans-btn' id='trans-btn1' onMouseEnter={this.enter} onMouseLeave={this.leave} onClick={this.trans} >PUBLIC</button>
          <button className='trans-btn' id='trans-btn2' onMouseEnter={this.enter} onMouseLeave={this.leave} onClick={this.friends} >FRIENDS</button>
          <button className='trans-btn' id='trans-btn3' onMouseEnter={this.enter} onMouseLeave={this.leave} onClick={this.mine} >MINE</button>
        </div>
        <div className='trans-index-show' id='users-trans'>{usersTransactions}</div>
        <div className='trans-index-show' id='friends-trans'>{friendsTransactions}</div>
        <div className='trans-index-show' id='all-trans'>{publicTransactions}</div>
      </div>
    )
  }
}

export default TransactionIndex;