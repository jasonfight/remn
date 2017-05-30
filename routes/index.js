var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

router.get('/input',function(req,res,next) {
  res.sendfile('./views/input.html')
});

router.get('/input0',function(req,res,next) {
  res.sendfile('./views/input0.html')
});

router.get('/show',function(req,res,next) {
  res.sendfile('./views/show.html')
});


module.exports = router;
