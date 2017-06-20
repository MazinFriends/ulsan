const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './static/index.html'));
});

app.listen(port, () => {
  console.log(`Ulsan Webapp Server lisiening at ${port}`);
});
