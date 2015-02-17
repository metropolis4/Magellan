var locations = require('../models/locations.js');

var indexController = {
	index: function(req, res){
        var location = req.params.location;
        if(!location){location = 'Seville'}
        if(!locations[location]){
            res.render('not-found', {
                location: location
            });
        }
        res.render('index', {
            location: location,
            info: locations[location].info,
            next: locations[location].next
        });
    },
    next: function(req, res){
        res.send({
            location: req.query.location,
            nextLocation: locations[req.query.location].next
        });
    }

};

module.exports = indexController;