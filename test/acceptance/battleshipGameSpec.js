var Game = require('../../game.js');
var RandomPositionShipGenerator = require('../../randomPositionShipGenerator.js');
var GridGenerator = require('../../gridGenerator.js');
var Position = require('../../position.js');
var assert = require('chai').assert;
var sinon = require('sinon');

var columnsSize = 10;
var rowsSize = 10;
var randomPositionShipGenerator = new RandomPositionShipGenerator(columnsSize, rowsSize);
var gridGenerator = new GridGenerator(randomPositionShipGenerator);
var game = new Game(gridGenerator);

var position_generator_get_position_for_battleship,
    position_generator_get_position_for_first_destructor,
    position_generator_get_position_for_second_destructor;

describe('Battleship Game', function(){
  beforeEach(function(){
    position_generator_get_position_for_battleship = sinon.stub(randomPositionShipGenerator, 'getPositionForBattleship');
    position_generator_get_position_for_first_destructor = sinon.stub(randomPositionShipGenerator, 'getPositionForFirstDestructor');
    position_generator_get_position_for_second_destructor = sinon.stub(randomPositionShipGenerator, 'getPositionForSecondDestructor');

  })

  xit('You sank my battleship! spec', function(){
    position_generator_get_position_for_battleship.returns(new Position("A3", "Vertical"));
    position_generator_get_position_for_first_destructor.returns(new Position("B3", "Vertical"));
    position_generator_get_position_for_second_destructor.returns(new Position("C3", "Vertical"));

    assert.strictEqual(game.play('a3'), 'Hit!');
    assert.strictEqual(game.play('a4'), 'Hit!');
    assert.strictEqual(game.play('a5'), 'Hit!');
    assert.strictEqual(game.play('a6'), 'Hit!');
    assert.strictEqual(game.play('a7'), 'You sank my battleship!');
  });

  afterEach(function(){
  })
});


