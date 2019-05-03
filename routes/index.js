var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express Project with pug',
    name: 'MBMeftahi'
  });
});

router.get('/logout', function(req, res){
  req.logout();
});

module.exports = router;
