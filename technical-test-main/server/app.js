// Implement your web server here

const express = require('express');
const PORT = 80;
const app = express();
const router = express.Router();
const personnelData = require('./data/personnel.json');

app.get('/api/personnel', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(personnelData));
});

app.listen(PORT, () => console.log(`App running at http://localhost on port ${PORT}`));