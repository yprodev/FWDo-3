var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');