FROM node:current-alpine3.18
WORKDIR /app
COPY . . 
RUN npm install