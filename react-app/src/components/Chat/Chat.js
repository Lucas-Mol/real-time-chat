import React from 'react';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages.js';

const Chat = ({user, messages, chatAPI}) => {

  let onSendMessage = (msgText) => {
    chatAPI.sendMessage(user.username, msgText)
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