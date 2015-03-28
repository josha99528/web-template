// Starter template for simple Node.js project, based on base-express (https://github.com/terlici/base-express)

var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.set('views', __dirname + '/views');
app.engine('html', require('./helpers/simplate.js').__express);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.use(require('./controllers'));

app.listen(port, function() {
    console.log('Listening on port ' + port + '...');
});