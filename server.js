var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});

//Need to revisit this hackjob at some point.
app.get('/:static', function(request, response) {
    var route = 'index.html';

    response.sendFile(route, { root: './public/' });
});

app.get('/views/:static', function(request, response) {
    var static = request.params.static,
        route;

    if (static) {
        if (!path.extname(static))
            route = static + '.html';
    }
    else
        route = 'home.html';

    response.sendFile(route, { root: './public/app/views/' });
});

app.post('/api/v1/nq/', function(req, res) {
    //console.log('saved, req.body = ');
    //console.log(req.body);
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