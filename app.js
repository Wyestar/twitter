const express = require('express');
const app = express();

app.use( (req, res, next) => {
  console.log('get is waiting');
  console.log();

  next();
})

app.get('/', (req, res) => {
  res.send('welcome');

})

app.get('/news', (req, res) => {
  res.send('NEWS');
})


app.listen(3000, () => {
  console.log('listening...');
})
