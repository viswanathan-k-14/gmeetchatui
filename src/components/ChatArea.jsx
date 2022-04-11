import React from 'react';
import Message from './Message';
const ChatArea = (props) => {
  return (
    <div className='chatArea'>
      {props.messageData.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
};

export default ChatArea;
