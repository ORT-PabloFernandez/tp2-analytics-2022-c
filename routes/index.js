let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Practicando Simu Taller de Programación 2' });
});


module.exports = router;