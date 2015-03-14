var express = require('express');
var router = express.Router();
var SampleModel = require('../models/sample-model')

router.get('/', function(req, res) {
    SampleModel.get(function(err, result) {
        res.render('sample-view.html', {sampleVariable: result});
    });
});

module.exports = router;