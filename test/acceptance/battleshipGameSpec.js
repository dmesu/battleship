var Game = require('../../game.js');
var GridGenerator = require('../../gridGenerator.js');
var Ship = require('../../ship.js');
var assert = require('chai').assert;
var sinon = require('sinon');
var game;


describe('Battleship Game', function(){
  beforeEach(function(){

  })

  it('You sank my battleship! spec', function(){
    game = new Game(new GridGenerator().generate(), new Ship(3), new Ship(1), new Ship(1));
    assert.strictEqual(game.play('a1'), 'Hit!');
    assert.strictEqual(game.play('a2'), 'Hit!');
    assert.strictEqual(game.play('a3'), 'You sank my battleship!');
  });

  it('Game over, you win', function(){
    game = new Game(new GridGenerator().generate(), new Ship(1), new Ship(0), new Ship(0));
    assert.strictEqual(game.play('a1'), 'Game over. You win!');
  });

  afterEach(function(){
  })
});


