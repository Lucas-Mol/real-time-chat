FROM node:21.4.0

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]