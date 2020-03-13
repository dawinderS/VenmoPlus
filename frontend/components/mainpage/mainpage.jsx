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
        <div className='mainpage-col1'>
          <div className='mainpage-create-trans'>
            <TransactionFormContainer />
          </div>
          {/* <div className='mainpage-incomplete-trans'>
          </div> */}
          <div className='mainpage-trans'>
            <TransactionIndexContainer />
          </div>
        </div>
        <div className='user-all'>
          <div className='trans-nav'>
            <strong>User Profile</strong>
            
          </div>
          <div className='mainpage-col2'>
            <div className='mainpage-user-prof'>
              <div className='user-prof-1'>
                <img className='trans-logo-pic' src="profile-logo.png" />
                <div>{currentUser.username}</div>
              </div>
              <div className='user-credit'>${currentUser.venmoCredit}</div>
            </div>
          </div>
          <div>Pending Requests
            <RequestIndexContainer />
          </div>
        </div>
      </div>

    </div>
  )
};


export default Mainpage;