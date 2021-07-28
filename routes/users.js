var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/users/cool', function(req, res, next) {
  res.send('You are so cool!');
});

module.exports = router;
