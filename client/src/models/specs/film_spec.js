var Film = require('../film');
var assert = require('assert');

describe('Film', function(){
  var film;

  beforeEach(function(){
    film = new Film({
      title: "Titanic",
      actors: "Leonardo Dicaprio"
    });
  });

  it('should have a title', function(){
    assert.equal(film.title, "Titanic")
  });
});