var express = require('express');
var Film = require('../client/src/models/film.js');
var Films = require('../client/src/models/films.js');
var Review = require('../client/src/models/review.js');
var filmRouter = express.Router();

var films = new Films();


// filmRouter.get('/', function(req, res){
//   res.json(films);
// });

filmRouter.get('/films', function(req, res){
  res.json(films);
});

filmRouter.get('/films/:id', function(req, res){
  res.json({data: films[req.params.id]});
});

filmRouter.post('/films', function(req, res){
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    genre: req. body.genre
  });
  films.push(film);
  res.json({data: films});
});

filmRouter.put('/films/:id', function(req, res){
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors,
    genre: req. body.genre
  });
  films[req.params.id] = film;
  res.json({data: films});
});

filmRouter.put('films/:id/review', function(req, res){
  var film = films[req.params.id];
  var review = new Review({
    comment: req.body.comment,
    rating: req.body.rating,
    author: req.body.author
  });
  film.addReview(review1);
  res.json({data: films});
});

filmRouter.delete('/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});


module.exports = filmRouter;