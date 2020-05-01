import React from 'react';
import TransactionIndexItem from './transaction_index_item';
import { logoutCurrentUser } from '../../actions/session_actions';

class TransactionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.trans = this.trans.bind(this);
    this.mine = this.mine.bind(this);
  }

  componentDidMount() {
    this.props.fetchTransactions();
  }

  trans() {
    let allBtn = document.getElementById('trans-btn1');
    let usersBtn = document.getElementById('trans-btn2');
    // let friendsBtn = document.getElementById('trans-btn3');

    let publicc = document.getElementById('all-trans');
    let mine = document.getElementById('users-trans');
    // let friends = document.getElementById('friends-trans');
    
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
    let allBtn = document.getElementById('trans-btn1');
    let usersBtn = document.getElementById('trans-btn2');
    // let friendsBtn = document.getElementById('trans-btn3');

    let publicc = document.getElementById('all-trans');
    let mine = document.getElementById('users-trans');
    // let friends = document.getElementById('friends-trans');

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

    
    // document.getElementById(id).style.display = 'flex';
    // document.getElementById(id).style.flexDirection = 'column';

    // if (all.style.display !== 'none') {
    //   all.style.display = 'flex';
    //   all.style.flexDirection = 'column';
    //   users.style.display = 'none';
    //   // friends.style.display = 'none';
    // }

    // if (users.style.display !== 'none' || !all.style.display) {
    //   users.style.display = 'flex';
    //   users.style.flexDirection = 'column';
    //   users.style.display = 'none';
    //   // friends.style.display = 'none';
    // }
      

  render() {
    if (!this.props.transactions) return null

    const publicTrans = this.props.transactions.filter(transaction =>
      transaction.user.username != this.props.currentUser.username && transaction.recipient.username != this.props.currentUser.username
    );

    const publicTransactions = publicTrans.map(transaction => (
      <TransactionIndexItem transaction={transaction} key={transaction.id} type='hidden'/>
    ));

    const usersTransactionsSelect = this.props.transactions.filter(transaction =>
      transaction.user.username === this.props.currentUser.username || transaction.recipient.username === this.props.currentUser.username
    );

    const usersTransactions = usersTransactionsSelect.map(transaction => {
      transaction.type = 'show';
      return <TransactionIndexItem transaction={transaction} key={transaction.id} type='shown' />
    });


    return (
      <div className='trans-feed'>
        <div className='trans-nav1'>
          <button className='trans-btn' id='trans-btn1' onClick={this.trans} >PUBLIC</button>
          {/* <button className='trans-btn' id='trans-btn2' onClick={this.friends} >FRIENDS</button> */}
          <button className='trans-btn' id='trans-btn3' onClick={this.mine} >MINE</button>
        </div>
        <div className='trans-index-show' id='users-trans'>{usersTransactions}</div>
        {/* <div className='trans-index-show' id='friends-trans'>{friendsTransactions}</div> */}
        <div className='trans-index-show' id='all-trans'>{publicTransactions}</div>
      </div>
    )
  }
}

export default TransactionIndex;