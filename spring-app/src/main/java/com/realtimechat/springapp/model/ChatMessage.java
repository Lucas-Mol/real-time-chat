package com.realtimechat.springapp.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ChatMessage {
    private String content;
    private String sender;
    private String timestamp;
    private MessageType type;
    public ChatMessage(String sender, String content) {
        this.sender = sender;
        this.content = content;
    }
}
