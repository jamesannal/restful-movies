var Film = require('../film');
var assert = require('assert');

describe('Film', function(){
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actors: "Leonardo Dicaprio",
      genre: "Romantic Sadness"
    });
  });

  it('should have a title', function(){
    assert.equal(film.title, "Titanic")
  });

  it('should have a genre', function(){
    assert.equal(film.genre, "Romantic Sadness")
  })
});