var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('dashboard called');
  res.render('dashboard');
});

module.exports = router;
