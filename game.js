function Game(gridGenerator, battleship, firstDestructor, secondDestructor) {
  this.gridGenerator = gridGenerator;
  this.battleship = battleship;
  this.firstDestructor = firstDestructor;
  this.secondDestructor = secondDestructor;
}

Game.prototype.play = function(move) {
  var moveOutcome = this.gridGenerator.updateWith(move);
  return moveOutcome === 'Water!' ? moveOutcome : this.decideIfShipHasBeenSunken(moveOutcome);
}

Game.prototype.decideIfShipHasBeenSunken = function(moveOutcome){
  if (moveOutcome === 'Battleship'){
    this.battleship.hit();
    return this.battleship.sank() ? 'You sank my battleship!' : 'Hit!';
  }
  if (moveOutcome === 'First Destructor'){
    this.battleship.hit();
    return this.battleship.sank() ? 'You sank my first destructor!' : 'Hit!';
  }

  if (moveOutcome === 'Second Destructor'){
    this.battleship.hit();
    return this.battleship.sank() ? 'You sank my second destructor!' : 'Hit!';
  }
}


module.exports = Game;
