// const exp = require('constants');
// Import Express.js
const express = require('express');

// Import built-in Node.js package 'path'
const path = require('path');

// Initialize an instance of Express.js
const app = express(); 

const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
