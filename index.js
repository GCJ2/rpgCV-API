// Import express
const express = require('express');

// Instantiate the server with express
const server = express();

// Allows Express to parse json objects
server.use(express.json());

// Assign a local port for server
const PORT = 5000;

const weapons = [
  {
    name: 'Nothing', id: 0, type: 'weapon', health: 0, attack: 0, defense: 0, magic: 0, magicResist: 0, speed: 0
  },
  {
    name: 'Hammer', id: 1, type: 'weapon', health: 140, attack: 15, defense: 2, magic: 1, magicResist: 2, speed: 1
  },
  {
    name: 'Sword', id: 2, type: 'weapon', health: 110, attack: 12, defense: 3, magic: 2, magicResist: 2, speed: 3
  },
  {
    name: 'Dagger', id: 3, type: 'weapon', health: 80, attack: 9, defense: 1, magic: 2, magicResist: 2, speed: 6
  }
];

// Basic GET for API
server.get('/', (req, res) => {
  res.json({hello: 'world'})
});

server.get('/api/weapons', (req, res) => {
  res.status(200).json(weapons);
});

// Posts weapon to weapons array
server.post('/api/weapons', (req, res) => {
  const newWeapon = req.body;
  newWeapon.id = weapons.length;
  weapons.push(newWeapon);
  res.status(201).json(newWeapon);
});


// Sets server to listen on PORT
// Callback to log what is happening
server.listen(PORT, () => {
  console.log(`Server now listening on ${PORT}`)
});