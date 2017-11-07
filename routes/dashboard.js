var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middlewares/auth');

router.get('/',isLoggedIn, function(req, res, next) {	
  res.render('dashboard');
});

module.exports = router;
