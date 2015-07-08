function Cell(occupied, shot, nameShip) {
  this.occupied = occupied;
  this.shot = shot;
  this.nameShip = nameShip;
}

Cell.prototype.isOccupied = function(){
  return this.occupied;
}

Cell.prototype.setShot = function(){
  this.shot = true;
}

Cell.prototype.isShot = function(){
  return this.shot;
}

Cell.prototype.getNameShip = function(){
  return this.nameShip;
}

module.exports = Cell;
