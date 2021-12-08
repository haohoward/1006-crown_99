var express = require('express');
var router = express.Router();
const apiCrown2Controller_99 = require('../controllers/apiCrown2Controller_99');

/* GET home page. */
router.get('/category_99', apiCrown2Controller_99.getCategories);

module.exports = router;
