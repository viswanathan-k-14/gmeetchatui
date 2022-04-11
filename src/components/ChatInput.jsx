import React, { useState } from 'react';

const ChatInput = (props) => {
  const [message, setMessage] = useState('');

  const Input = (e) => {
    setMessage(e.target.value);
  };

  const Submit = (e) => {
    e.preventDefault();
    if (message !== '') {
      props.sendMessage(message);
    }
    setMessage('');
  };

  return (
    <form className='input-wrapper'>
      <input
        type='text'
        value={message}
        className='input-field'
        onChange={Input}
        placeholder='Send a message to everyone'
      />
      <button
        type='submit'
        onClick={Submit}
        disabled={message.length === 0 ? true : false}
      >
        <i class='fa-solid fa-paper-plane'></i>
      </button>
    </form>
  );
};

export default ChatInput;
