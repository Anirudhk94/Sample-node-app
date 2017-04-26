var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile('/Users/KULKA1/Documents/Node/Sample-app/index.html');
});

app.listen(8080);

console.log('Server has started');