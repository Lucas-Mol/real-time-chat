const chatAPI = {
    sendMessage: (stompClient, username, msgText) => {
        if(msgText && stompClient) {
            var chatMessage = {
                sender: username,
                content: msgText,
                timestamp: new Date()
            };
        stompClient.send("/app/sendMessage", {}, JSON.stringify(chatMessage));
        }
    }
}

export default chatAPI
