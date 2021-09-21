# Half Duplex Messaging

## Overview
- This is a fun project similar to the TCP socket programming in Java.
- It is a simple half duplex messaging system.
- The client sends POST requests to server, and server responds with the response which it gets from the console.
- Not EFFICIENT, but it is a fun project.

## Install
- `npm install` to install dependencies

## Usage

### Server
- `npm run server` to start the server
- You will need to expose your port to the outside world.
- Use [Localtunnel](https://localtunnel.github.io/) to make it happen.
- Send your Hostname and Port to the client user.

### Client
- `npm run client` to start the client
- Enter the hostname and port of the server.
- It will send a GET request to the server.
- It will print the response from the server.
- Can begin the Half Duplex Messaging process.

## Dependencies Used
- [Express](https://expressjs.com/) - Node.js web framework
- [node-fetch](https://www.npmjs.com/package/node-fetch) - Node.js HTTP client

### Enjoy 🎉