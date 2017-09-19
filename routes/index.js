const express = require('express');

const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  // let names = tweetBank.find(tweetBank.list(), 'names: names');
  res.render('index', { tweets: tweets, showForm: true, name: ""});
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var list = tweetBank.find( {name: name} );
  res.render('index', { tweets: list, showForm: true, name: name });
})

router.get('/users/id/:id', function(req, res) {
  var id = req.params.id;
  var uniqueIds = tweetBank.find( {idTracker: id} );
  res.render('index', { tweets: uniqueIds, showForm: false } );
})

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  //console.log('Name', name, 'Text', text);
  tweetBank.add(name, text);
  res.redirect('/');
});



module.exports = router;
