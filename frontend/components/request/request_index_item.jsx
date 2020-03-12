import React from 'react';

const RequestIndexItem = ({ request }) => {
  return (
    <div className='request'>
      <form>
        <div className='request-users'>{request.user.username} paid {request.payer.username}</div>
        <div className='request-amount'>${request.amount}</div>
        <div className='request-description'>{request.description}</div>
      </form>
    </div>
  )
}

export default RequestIndexItem;