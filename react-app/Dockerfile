FROM node:21.4.0

WORKDIR /app

COPY . .

ARG REACT_APP_HOST_IP

ENV REACT_APP_HOST_IP=$REACT_APP_HOST_IP

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]