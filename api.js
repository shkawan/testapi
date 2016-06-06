var express = require('express');
require('date-utils');
var app = express();

app.get('/', function (req, res) {
  var dt = Date();
  res.status(200).json( { "name" : "datetime", "date" : dt } );
});

var server = app.listen(19000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('listen on http://%s:%s', host, port);
});
