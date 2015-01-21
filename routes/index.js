var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'My Blog!' });
});

/* GET blog1 page. */
router.get('/', function(req, res) {
  res.render('blog1');
});

/* GET blog2 page. */
router.get('/', function(req, res) {
  res.render('blog2');
});

/* GET blog3 page. */
router.get('/', function(req, res) {
  res.render('blog3');
});

module.exports = router;
