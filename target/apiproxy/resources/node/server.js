var express = require('express');
var routes = require('./router/routes')

var PORT = 9001 || process.env.port;

var app = express();

app.use('/',routes);

app.listen(PORT,function (err) {
    console.log('Server listening on PORT '+PORT);
});