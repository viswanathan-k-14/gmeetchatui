import React from 'react';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import './chat.css';
const ChatBox = (props) => {
  return (
    <>
      <div className='chat-wrapper'>
        <div className='chat-container'>
          <div className='chat-head'>
            <h3>In-call messages</h3>
            <div>
              <i class='fa-solid fa-xmark'></i>
            </div>
          </div>
          <div className='section-1'>Let everyone send messages</div>
          <div className='section-2'>
            Messages can only been seen by people in the call and are deleted
            when call ends
          </div>
          <ChatArea messageData={props.messageData} />
        </div>
      </div>
      <ChatInput sendMessage={(message) => props.sendMessage(message)} />
    </>
  );
};

export default ChatBox;
