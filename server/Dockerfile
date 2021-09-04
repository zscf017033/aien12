FROM node:14-buster
WORKDIR /app
ADD . /app
RUN npm install
RUN npm install ejs --save
EXPOSE 1337
CMD node server.js
