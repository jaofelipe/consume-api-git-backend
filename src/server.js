const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, path.normalize('..'), 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, path.normalize('..'),'build', 'index.html'));
});
app.use(routes);

app.listen(3333);