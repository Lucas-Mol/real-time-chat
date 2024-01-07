package com.realtimechat.springapp.controller;

import com.realtimechat.springapp.model.ChatMessage;
import com.realtimechat.springapp.model.MessageType;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload ChatMessage message) {
        message.setType(MessageType.CHAT);
        return message;
    }

    @MessageMapping("/newUser")
    @SendTo("/topic/public")
    public ChatMessage newUser(@Payload ChatMessage message,
                           SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", message.getSender());
        message.setContent(message.getSender() + " has joined the chat!");
        message.setType(MessageType.JOIN);
        return message;
    }
}
