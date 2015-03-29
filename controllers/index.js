var express = require('express');
var router = express.Router();

router.use('/sample-controller', require('./sample-controller'));

router.get('/', function(req, res) {
    res.render('index.html');
});

module.exports = router;