var express = require('express');
var Film = require('../client/src/models/film.js');
var Films = require('../client/src/models/films.js');
var Review = require('../client/src/models/review.js');
var filmRouter = express.Router();

var films = new Films();

filmRouter.get('/films', function(req, res){
  res.json(films);
});

filmRouter.get('/films/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

filmRouter.post('/films', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

filmRouter.put('/films/:id', function(req, res){
  films[req.params.id].addReview(req.body.review);
  res.json({data: films});
});

filmRouter.delete('/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});


module.exports = filmRouter;