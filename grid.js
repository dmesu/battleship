
function Grid(cells) {
  this.cells = cells;
}

Grid.prototype.updateWith = function(move){
  var column = "abcdefghij".indexOf(move.charAt(0));
  var row = move.charAt(1) - 1;
  var cell = this.cells[column][row];
  if (cell.isOccupied()){
    if (cell.isShot()){
      return "already shot";
    }
    cell.setShot();
    return cell.getNameShip();
  }
  return "Water!";
}

module.exports = Grid;

