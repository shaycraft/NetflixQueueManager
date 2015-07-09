var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

app.post('/api/v1/nq/', function(req, res) {
   queue.create(req.body, function(err, obj) {
      if (err) {
          res.send(err);
      }
      res.send({ id: obj._id });
   });
});

mongoose.connect('mongodb://localhost:27017/netflix');

var queueSchema = new mongoose.Schema({ type: mongoose.Schema.Types.Mixed }, { strict: false });
var queue = mongoose.model('queue', queueSchema);