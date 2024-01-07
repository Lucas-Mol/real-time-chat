import React from 'react';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';
import chatAPI from '../../services/chatapi.js';

const Chat = ({user, messages,stompClient}) => {

  let onSendMessage = (msgText) => {
    chatAPI.sendMessage(stompClient, user.username, msgText)
  }

  return (
    <>
      <Messages
        messages={messages}
        currentUser={user}
      />
      <Input onSendMessage={onSendMessage} />
    </>
  ) 

}

export default Chat;