var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var port= 8080;
app.use(express.static(path.join(__dirname, 'build')));
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

