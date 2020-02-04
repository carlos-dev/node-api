const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('node api')
});

app.listen(3001);
