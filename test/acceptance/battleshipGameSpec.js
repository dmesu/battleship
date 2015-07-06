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

beforeEach(function(){
  position_generator_get_position_for_battleship = sinon.stub(randomPositionShipGenerator, 'getPositionForBattleship');
  position_generator_get_position_for_first_destructor = sinon.stub(randomPositionShipGenerator, 'getPositionForFirstDestructor');
  position_generator_get_position_for_second_destructor = sinon.stub(randomPositionShipGenerator, 'getPositionForSecondDestructor');

})

describe('Battleship Game', function(){
  xit('should return "Water!" if the move hits no ship', function(){
    position_generator_get_position_for_battleship.returns(new Position("A3", "Vertical"));
    position_generator_get_position_for_first_destructor.returns(new Position("B3", "Vertical"));
    position_generator_get_position_for_second_destructor.returns(new Position("C3", "Vertical"));
    assert.strictEqual(game.play('a2'), 'Water!');
  });
});

afterEach(function(){
})
