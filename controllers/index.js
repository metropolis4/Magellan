var locations = require('../models/locations.js');

var indexController = {
	index: function(req, res){
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
    },
    notFound: function(req, res){

    }

};

module.exports = indexController;