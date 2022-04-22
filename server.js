const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

require('./config/db.connection');

app.use((req, res, next) => {
  console.log(`[${req.url}] ${req.method} - ${new Date().toLocaleTimeString()}`);
  next();
});

app.listen(PORT, () => {
  console.log(`[${new Date().toLocaleTimeString()}] ==> Server running at http://localhost:${PORT}`);
});