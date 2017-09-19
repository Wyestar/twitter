const express = require('express');

const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  // let names = tweetBank.find(tweetBank.list(), 'names: names');
  res.render('index', { tweets: tweets });
})

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  console.log(list);
  // should be just tweet, no names
  res.render('index', { tweets: list } );
});



module.exports = router;
