import React, { useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './App.css';
import LoginForm from './components/LoginForm';
import { randomColor } from './utils/common.js';
import Chat from './components/Chat/Chat.js';

const SOCKET_URL = 'http://192.168.1.10:8080/ws-chat';

const App = () => {
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState(null)
  const socket = new SockJS(SOCKET_URL);
  const stompClient = Stomp.over(socket);

  stompClient.connect({})
  stompClient.debug = null

  const login = (username) => {
    stompClient.send("/app/newUser",
      {},
      JSON.stringify({
        sender: username,
        timestamp: new Date(),
        type: 'JOIN'})
    )
    stompClient.subscribe('/topic/public', onMessageReceived);
  }

  let handleLoginSubmit = (username) => {
    login(username)

    setUser({
      username: username,
      color: randomColor()
    })
  }

  let onMessageReceived = (msg) => {
    setMessages(prevMessages => [...prevMessages, JSON.parse(msg.body)]);
    setTimeout(() => {
      document.getElementById("chat-container").scrollTop = document.getElementById("chat-container").scrollHeight
    }, 50)
  }

  return (
    <div className="App">
      {!!user ?
        <Chat 
          user={user}
          messages={messages}
          stompClient={stompClient} />
          :
        <LoginForm onSubmit={handleLoginSubmit} />
      }
    </div>
  )
}

export default App;