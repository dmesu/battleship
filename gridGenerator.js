var Grid = require('grid.js');
var Cell = require('cell.js');

function GridGenerator() {

}

GridGenerator.prototype.generate = function(battleship, firstDestructor, secondDestructor){
  var cells = [
  [new Cell(true, false, 'battleship' ) ,     new Cell(true, false, 'battleship') ,      new Cell(true, false, 'battleship'),       new Cell(true, false, 'battleship'),       new Cell(true, false, 'battleship'), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(true, false, 'firstDestructor'),  new Cell(true, false, 'firstDestructor'),  new Cell(true, false, 'firstDestructor'),  new Cell(true, false, 'firstDestructor'),  new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(true, false, 'secondDestructor'), new Cell(true, false, 'secondDestructor'), new Cell(true, false, 'secondDestructor'), new Cell(true, false, 'secondDestructor'), new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)],
  [new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),                    new Cell(false, false),              new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false), new Cell(false, false)]
  ];
  return new Grid(cells);
}

module.exports = GridGenerator;
