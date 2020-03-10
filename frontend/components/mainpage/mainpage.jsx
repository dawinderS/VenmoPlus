import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "../navbar/navbar_container";
import TransactionIndex from '../transaction/transaction_index';

const Mainpage = ({ currentUser, logout, transactions, fetchTransactions }) => {
  return (
    <div className='mainpage'>
      <div id='mainpage-navbar'>
        <NavBarContainer />
      </div>
      <div className='mainpage-body'>
        <div id='blahblah'>hello hi </div>

        <div>
          <div>hi</div>
          <TransactionIndex transactions={transactions} fetchTransactions={fetchTransactions} />
        </div>
      </div>

    </div>
  )
};


export default Mainpage;