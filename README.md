# Realtime Chat
A simple Realtime Chat project using WebSocket with Spring Boot (Backend) and React (Frontend)

## Intro
The Realtime Chat is a personal project created to pratice some WebSocket implementation. It's a basic chat which users can join in and text with each other in same chat.

Realtime Chat hasn't been develop to be a complete application and to be used on production, it's just a base to be used in realtime application. (It doesn't persist messages)

## Overview

### Login:
<img width="1724" alt="image" src="https://github.com/Lucas-Mol/real-time-chat/assets/93149981/d26fc1fe-4388-48d7-8846-bab885340de3">

### Chat:
<img width="981" alt="image" src="https://github.com/Lucas-Mol/real-time-chat/assets/93149981/24141fc2-4de6-4e3c-9b4f-283864a4db46">

## How to run?

### Docker:
You can just use Docker on project root directory:
```
docker-compose up
```
**Obs:** You can edit the REACT_APP_HOST_IP on <a href='/docker-compose.yml'>docker-compose.yml</a> to use your IPv4 on your LAN and access application through different devices on same network

### Locally
Require:

- Node - 21.4.0
- Java - jdk-17
- Maven

You can run it on /react-app:
```
npm i
npm start
```

and run it on /spring-app:
```
mvn clean package
mvn spring-boot:run
```

Both you can also start from your favorite IDE

## Tech Stack

- WebSocket
- Java 17
- Spring Boot
- Node
- Javascript
- React
