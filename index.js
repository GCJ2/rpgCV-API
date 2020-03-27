// Import express
const express = require('express');

// Instantiate the server with express
const server = express();

// Assign a local port for server
const PORT = 5000;

// Sets server to listen on PORT
// Callback to log what is happening
server.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}`)
});