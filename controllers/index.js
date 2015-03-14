var express = require('express');
var router = express.Router();

var options = { root: './public/' };

router.use('/sample-controller', require('./sample-controller'));

router.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

module.exports = router;