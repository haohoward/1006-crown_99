var express = require('express');
var router = express.Router();
const crown2Controller_99 = require('../controllers/crown2Controller_99');

/* GET home page. */
router.get('/', crown2Controller_99.getCategories);

module.exports = router;
