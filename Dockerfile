FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN npm install --save express debug 
RUN npm install --save-dev nodemon
RUN npm install --save express-validator

COPY . /usr/src/app