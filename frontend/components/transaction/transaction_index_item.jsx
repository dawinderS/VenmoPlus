import React from 'react';

const TransactionIndexItem = ({ transaction }) => {
  return (
    <div className='transaction'>
      <form>
        <div className='transaction-users'>{transaction.user.username} paid {transaction.recipient.username}</div>
        <div className='transaction-amount'>${transaction.amount}</div>
        <div className='transaction-description'>{transaction.description}</div>
      </form>
    </div>
  )
}

export default TransactionIndexItem;