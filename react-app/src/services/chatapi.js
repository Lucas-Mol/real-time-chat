import SockJS from 'sockjs-client';
import Stomp from 'stompjs';


const backendHost = process.env.REACT_APP_HOST_IP || 'localhost'
const SOCKET_URL = 'http://' + backendHost + ':8080/ws-chat';

let stompClient

const chatAPI = {
    connect: () => {
        const socket = new SockJS(SOCKET_URL);
        stompClient = Stomp.over(socket);
      
        stompClient.connect({})
        stompClient.debug = null
    },

    login: (username, onMessageReceived) => {
        stompClient.send("/app/newUser",
        {},
        JSON.stringify({
          sender: username,
          timestamp: new Date(),
          type: 'JOIN'})
      )
      stompClient.subscribe('/topic/public', onMessageReceived);
    },
    
    sendMessage: (username, msgText) => {
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
