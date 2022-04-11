import React, { useState, useEffect } from 'react';
import ChatBox from './components/ChatBox.jsx';
import './App.css';

function App() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    formatAMPM(new Date());
    console.log('dfggdfg');
  }, []);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function populateMessage(message) {
    let current = formatAMPM(new Date());
    let messageObject = {
      message,
      id: Date.now(),
      time: current,
    };
    setChats([...chats, messageObject]);
  }

  return (
    <div className='App'>
      <ChatBox
        sendMessage={(message) => populateMessage(message)}
        messageData={chats}
      />
    </div>
  );
}

export default App;
