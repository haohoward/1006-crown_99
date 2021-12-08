var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown_99', {
    title: 'Express',
    name: 'Enhao Huang',
    id: `209410199`,
  });
});

module.exports = router;
