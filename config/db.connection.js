const mongoose = require('mongoose');

const connection = {};

const connectionStr = "localhost:27017/company";

mongoose.connect(`mongodb://${connectionStr}`);

mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] ==> Connected to mongoDB | http://${connectionStr}`);
});

mongoose.connection.on('error', (error) => {
  console.log(`[${new Date().toLocaleTimeString()}] ==> Oh no! MongoDB had an issue connecting...`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] ==> MongoDB has been disconnected.`);
});

module.exports = connection;