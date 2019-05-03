var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express', name: 'MBMeftahi'});
//});

router.get('/', function(req, res) {
  res.send('respond with a resource');
  //console.log(config);
});

module.exports = router;
