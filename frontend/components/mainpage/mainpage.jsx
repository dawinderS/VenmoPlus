import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import TransactionIndexContainer from '../transaction/transaction_index_container';
import TransactionFormContainer from '../transaction/transaction_form_container';

const Mainpage = ({ currentUser, logout, transactions, fetchTransactions }) => {
  return (
    <div className='mainpage'>
      <div id='mainpage-navbar'>
        <NavBarContainer />
      </div>
      <div className='mainpage-body'>
        <div className='mainpage-transactions'>
          <h2>Transactions</h2>
          <TransactionIndexContainer />
          <TransactionFormContainer />
        </div>
      </div>

    </div>
  )
};


export default Mainpage;