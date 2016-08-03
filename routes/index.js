var express = require('express');
var bodyParser = require("body-parser");

var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.use(express.static('public'));

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(function (req, res, next) {
  console.log(req.body);
  next();
});

router.post('/tweets', function (req, res) {
  tweetBank.add(req.body.name, req.body.text);
  res.redirect('/');
});

router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  name = name.split("%20").join(" ");
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { name: name, tweets: list, showForm: true, onName: true} );
});

/*router.get('/tweets/:id', function (req, res) {
  var id = String(req.params.id);
  var tweet = tweetBank.find({id: id});
  res.render('index', {tweet-id: +id, tweets: tweet});
}); */

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true, onName: false} );
});

module.exports = router;
