const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');

app.use( (req, res, next) => {
  console.log(req.method + ' / ' + res.statusCode);
  next();
})

app.use(express.static('./public'));

app.use('/', routes);

// app.get('/', (req, res) => {
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render('index', {title: 'Hall of Fame', people: people});
// })


var locals = {
  title: 'An Example',
  people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});


app.listen(3000, () => {
  console.log('listening...');
})
