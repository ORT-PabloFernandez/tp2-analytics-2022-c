var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Recuperatorio de TP2 DE ALEJANDRO PRINCIPE' });
});

module.exports = router;