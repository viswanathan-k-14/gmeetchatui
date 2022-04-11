import React from 'react';

const Message = (props) => {
  return (
    <div className='message-wrapper'>
      <div className='message-meta'>
        <strong>You</strong>
        <p>{props.message.time}</p>
      </div>
      <div className='message-content'>
        <p>{props.message.message}</p>
      </div>
    </div>
  );
};

export default Message;
