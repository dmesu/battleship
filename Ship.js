function Ship(aliveCells) {
  this.aliveCells = aliveCells;
}

Ship.prototype.hit = function(){
  this.aliveCells--;
}

Ship.prototype.sunk = function(){
  return this.aliveCells === 0;
}

module.exports = Ship;
