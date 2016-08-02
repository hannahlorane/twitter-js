var express = require('express');

var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  name = name.split("_").join(" ");
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { name: name, list: list } );
});

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
