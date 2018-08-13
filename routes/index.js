var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Ken, The Second Lab' });
});

router.get('/views/ken1', function(req, res) {
  res.render('ken1', { 
  	title: 'Ken, First of His Name' });
});
router.get('/views/ken2', function(req, res) {
  res.render('ken2', { 
  	title: 'Ken, II' });
});
router.get('/views/ken3', function(req, res) {
  res.render('ken3', { 
  	title: 'Ken, III' });
});

module.exports = router;
