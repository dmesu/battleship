var Game = require('../../game.js');
var Grid = require('../../grid.js');
var Ship = require('../../ship.js');
var assert = require('chai').assert;
var sinon = require('sinon');

var move = 'a2';
var grid = new Grid();

var grid_update_with;

describe('Game', function(){
  beforeEach(function(){
    grid_update_with = sinon.stub(grid, 'updateWith');
    grid_update_with.withArgs(move);
  })

  it('should return "Water!" if the move hits no ship', function(){
    var game = new Game(grid, new Ship(5), new Ship(4), new Ship(4));
    grid_update_with.returns('Water!');
    assert.strictEqual(game.play(move), 'Water!');
  });

  it('should return "Hit!" if the move hits ship', function(){
    var game = new Game(grid, new Ship(5), new Ship(4), new Ship(4));
    grid_update_with.returns('battleship');
    assert.strictEqual(game.play(move), 'Hit!');
  });

  it('should return "already shot" if the move hits and already shot cell in a ship', function(){
    var game = new Game(grid, new Ship(5), new Ship(4), new Ship(4));
    grid_update_with.returns('already shot');
    assert.strictEqual(game.play(move), 'already shot');
  });

  it('should return "You sank my battleship!" if the move sank the battleship', function(){
    var game = new Game(grid, new Ship(1), new Ship(4), new Ship(4));
    grid_update_with.returns('battleship');
    assert.strictEqual(game.play(move), 'You sank my battleship!');
  });

  it('should return "You sank my first destructor!" if the move sank the first destructor', function(){
    var game = new Game(grid, new Ship(5), new Ship(1), new Ship(4));
    grid_update_with.returns('firstDestructor');
    assert.strictEqual(game.play(move), 'You sank my firstDestructor!');
  });

  it('should return "You sank my second destructor!" if the move sank the second destructor', function(){
    var game = new Game(grid, new Ship(5), new Ship(4), new Ship(1));
    grid_update_with.returns('secondDestructor');
    assert.strictEqual(game.play(move), 'You sank my secondDestructor!');
  });

  it('should return "Game over. You win!" if the move sank the last ship', function(){
    var game = new Game(grid, new Ship(0), new Ship(0), new Ship(1));
    grid_update_with.returns('secondDestructor');
    assert.strictEqual(game.play(move), 'Game over. You win!');
  });

  afterEach(function(){
    grid_update_with.restore();
  })
});
