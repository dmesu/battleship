var Game = require('../../game.js');
var GridGenerator = require('../../gridGenerator.js');
var Ship = require('../../ship.js');
var assert = require('chai').assert;
var sinon = require('sinon');

var move = 'a2';
var gridGenerator = new GridGenerator();

var grid_generator_update_with;

describe('Game', function(){
  beforeEach(function(){
    grid_generator_update_with = sinon.stub(gridGenerator, 'updateWith');
    grid_generator_update_with.withArgs(move);
  })

  it('should return "Water!" if the move hits no ship', function(){
    var game = new Game(gridGenerator, new Ship(5), new Ship(4), new Ship(4));
    grid_generator_update_with.returns('Water!');
    assert.strictEqual(game.play(move), 'Water!');
  });

  it('should return "Hit!" if the move hits ship', function(){
    var game = new Game(gridGenerator, new Ship(5), new Ship(4), new Ship(4));
    grid_generator_update_with.returns('Battleship');
    assert.strictEqual(game.play(move), 'Hit!');
  });

  it('should return "You sank my battleship!" if the move sank the battleship', function(){
    var game = new Game(gridGenerator, new Ship(1), new Ship(4), new Ship(4));
    grid_generator_update_with.returns('Battleship');
    assert.strictEqual(game.play(move), 'You sank my battleship!');
  });

  afterEach(function(){
    grid_generator_update_with.restore();
  })
});
