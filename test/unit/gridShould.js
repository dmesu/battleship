var Grid = require('../../grid.js');
var Cell = require('../../cell.js');
var assert = require('chai').assert;
var sinon = require('sinon');

var cells = [[new Cell(true, false, 'battleship' ) , new Cell(true, false, 'battleship') , new Cell(true, false, 'battleship') ] ,
            [new Cell(false, false)                , new Cell(false, false)              , new Cell(false, false)],
            [new Cell(false, false)                , new Cell(false, false)              , new Cell(false, false)]];
var grid = new Grid(cells);

describe('Grid', function(){
  beforeEach(function(){

  })

  it('should return "Water!" if the move hits no ship', function(){
    assert.strictEqual(grid.updateWith('b2'), 'Water!');
  });

  it('should return "battleship" if the move hits ship', function(){
    assert.strictEqual(grid.updateWith('a2'), 'battleship');
  });

  it('should return "already shot" if the move hits a cell in the ship already shot', function(){
    grid.updateWith('a2')
    assert.strictEqual(grid.updateWith('a2'), 'already shot');
  });

  afterEach(function(){

  })
});
