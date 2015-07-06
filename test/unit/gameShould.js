var Game = require('../../game.js');
var GridGenerator = require('../../gridGenerator.js');
var assert = require('chai').assert;
var sinon = require('sinon');

var move = 'a2';
var gridGenerator = new GridGenerator();
var game = new Game(gridGenerator);

var grid_generator_update_with;

beforeEach(function(){
  grid_generator_update_with = sinon.stub(gridGenerator, 'updateWith');
  grid_generator_update_with.withArgs(move);
})

describe('Game', function(){
  it('should return "Water!" if the move hits no ship', function(){
    grid_generator_update_with.returns('Water!');
    assert.strictEqual(game.play(move), 'Water!');
  });
});

afterEach(function(){
})
