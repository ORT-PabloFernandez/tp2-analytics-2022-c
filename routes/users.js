let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log('checkl');
  res.send('respond with a resource');
});

module.exports = router;
