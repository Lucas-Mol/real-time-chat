import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Chat from './components/Chat/Chat.js';
import chatAPI from './services/chatapi.js';

const App = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)

  chatAPI.connect()

  const onMessageReceived = (msg) => {
    setMessages(prevMessages => [...prevMessages, JSON.parse(msg.body)]);
    setTimeout(() => {
      document.getElementById("chat-container").scrollTop = document.getElementById("chat-container").scrollHeight
    }, 50)
  }

  let handleLoginSubmit = (username) => {
    chatAPI.login(username, onMessageReceived)

    setUser({
      username: username
    })
  }

  return (
    <div className="App">
      {!!user ?
        <Chat 
          user={user}
          messages={messages}
          chatAPI={chatAPI} />
          :
        <LoginForm onSubmit={handleLoginSubmit} />
      }
    </div>
  )
}

export default App;