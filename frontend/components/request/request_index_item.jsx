import React from 'react';
import { IoMdHeart } from 'react-icons/io';

const RequestIndexItem = ({ request }) => {
  return (
      <div className='transaction-index1'>
        <div className='trans-summary'>
          <img className='trans-logo-pic' src="profile-logo.png" />
          <div className='trans-descr'>
            <div className='transaction-users'>
              <strong>{request.user.username}</strong>
              <div>charged</div>
              <strong>you</strong>
            </div>
            <div className='transaction-date'>
              on {request.createdAt.slice(0, 10)} at {request.createdAt.slice(11, 16)}
            </div>
            <div className='transaction-description'>
              {request.description}
            </div>
          </div>
          <div className='trans-amount'>
            -${request.amount}
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
  )
}

export default RequestIndexItem;