var express = require('express');
// var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var locations = require('./models/locations.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
// app.use(express.static(__dirname + '/public'));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', indexController.index);
app.get('/:location?', function(req, res){
    if(!req.params.location){req.params.location = 'Seville'}
    if(!locations[req.params.location]){
        res.render('not-found', {
            location: req.params.location
        });
    }
    res.render('index', {
        location: req.params.location,
        info: locations[req.params.location].info,
        next: locations[req.params.location].next
    });
    // console.log(locations[req.params.location])
});

var server = app.listen(3269, function() {
	console.log('Express server listening on port ' + server.address().port);
});
