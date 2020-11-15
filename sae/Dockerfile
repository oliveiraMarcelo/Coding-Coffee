FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i --silent

CMD ["npm", "run", "dev"]
