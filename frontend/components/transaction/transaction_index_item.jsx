import React from 'react';
import { render } from 'react-dom';
import { IoIosHeartEmpty, IoMdHeart, IoIosGlobe } from 'react-icons/io';

const TransactionIndexItem = ({ transaction }) => {
  const after_dec = transaction.amount.toString().split('.')[1]
    if ( transaction.type === 'show') {
      return (
        <div className='transaction-index'>
          <div className='trans-summary'>
            <img className='trans-logo-pic' src="profile-logo.png" />
            <div className='trans-descr'>
              <div className='transaction-users'>
                <strong>you</strong> 
                <div>paid</div> 
                <strong>{transaction.recipient.username}</strong>
              </div>
              <div className='transaction-date'>
                on {transaction.createdAt.slice(0, 10)} at {transaction.createdAt.slice(11,16)}
              </div>
              <div className='transaction-description'>
                {transaction.description}
              </div>
            </div>
            <div className='trans-amount'>
              -${transaction.amount}
            </div>
          </div>
          <div className='trans-like-btn'> 
            <IoMdHeart className='trans-heart-btn' size={20} /> 
            <div className='trans-cmt-text'>Be the first to like this</div>
          </div>
          <div className='transaction-comment'>
            <input type="text" placeholder='Write a comment' />
          </div>
        </div>
      );
    } else {
      return (
        <div className='transaction-index'>
          <div className='trans-summary'>
            <img className='trans-logo-pic' src="profile-logo.png" />
            <div className='trans-descr'>
              <div className='transaction-users'>
                <strong>{transaction.user.username}</strong>
                <div>paid</div>
                <strong>{transaction.recipient.username}</strong>
              </div>
              <div className='transaction-date'>
                on {transaction.createdAt.slice(0, 10)} at {transaction.createdAt.slice(11, 16)}
              </div>
              <div className='transaction-description'>
                {transaction.description}
              </div>
            </div>
            <div className='trans-amount'>
              <IoIosGlobe className='trans-heart-btn' size={25} /> 
            </div>
          </div>
          <div className='trans-like-btn'>
            <IoMdHeart className='trans-heart-btn' size={20} />
            <div className='trans-cmt-text'>Be the first to like this</div>
          </div>
          <div className='transaction-comment'>
            <input type="text" placeholder='Write a comment' />
          </div>
        </div>
      );
    }
  
  // return (
  //   <div className='transaction'>
  //     <form className='current-user-transactions'>

  //     </form>
  //     <form>
  //       <div className='transaction-users'>{transaction.user.username} paid {transaction.recipient.username}</div>
  //       <div className='transaction-description'>{transaction.description}</div>
  //       <div className='transaction-amount'>${transaction.amount}</div>
  //     </form>
  //   </div>
  // )
}

export default TransactionIndexItem;