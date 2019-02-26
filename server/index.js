const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

const server = app.listen(process.env.PORT || 8080, () => {
  console.log('Node.js is listening to PORT:' + server.address().port);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get(/\/angular(\/([^\/]+))/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/angular', 'index.html'));
});

app.get(/\/react(\/([^\/]+))/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/react', 'index.html'));
});

app.get(/\/vue(\/([^\/]+))/, (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/vue', 'index.html'));
});
