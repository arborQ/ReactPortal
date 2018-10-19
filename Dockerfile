FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm install -p
COPY . /app
CMD node server.js
EXPOSE 1337