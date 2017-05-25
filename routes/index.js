var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

router.get('/login',function(req,res,next) {
  res.sendfile('./views/login.html')
});

router.get('/show',function(req,res,next) {
  res.sendfile('./views/show.html')
});


module.exports = router;
