import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import TransactionIndexContainer from '../transaction/transaction_index_container';
import TransactionFormContainer from '../transaction/transaction_form_container';
import RequestIndexContainer from '../request/request_index_container';

const Mainpage = ({ currentUser, logout, transactions, fetchTransactions }) => {
  return (
    <div className='mainpage'>
      <div id='mainpage-navbar'>
        <NavBarContainer />
      </div>
      <div className='mainpage-body'>
        <div className='mainpage-create'>
          <h2>Make payment</h2>
          <TransactionFormContainer />
        </div>
        <div className='mainpage-transactions'>
          <h2>Transactions</h2>
          <TransactionIndexContainer />
          <h2>Requests</h2>
          <RequestIndexContainer />
        </div>
      </div>

    </div>
  )
};


export default Mainpage;