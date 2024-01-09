import React from 'react'

const Messages = ({ messages, currentUser }) => {

    let renderMessage = (message) => {
        const { sender, content, type , timestamp} = message;
        const messageFromMe = currentUser.username === message.sender;
        const className = messageFromMe ? "Messages-message currentUser" : "Messages-message";
        const textJoiningClassname = type === 'JOIN' ? 'text joining-message' : 'text';
        const msgID = sender + timestamp + Math.floor(Math.random() * 1000)

        return (
            <li key={msgID} className={className}>
                <div className="Message-content">
                    <div className="username">
                        {sender}
                    </div>
                    <div className={textJoiningClassname}>{content}</div>
                </div>
            </li>
        );
    };

    return (
        <ul id='chat-container' className="messages-list">
            {messages.map(msg => renderMessage(msg))}
        </ul>
    )
}


export default Messages