function Game(grid, battleship, firstDestructor, secondDestructor) {
  this.grid = grid;
  this.battleship = battleship;
  this.firstDestructor = firstDestructor;
  this.secondDestructor = secondDestructor;
}

Game.prototype.play = function(move) {
  var moveOutcome = this.grid.updateWith(move);
  return (moveOutcome === 'Water!' || moveOutcome === 'already shot') ?
        moveOutcome :
        this.decideGameStatusAfterHit(moveOutcome);
}

Game.prototype.decideGameStatusAfterHit = function(ship){
    this[ship].hit();
    if (this[ship].sunk()){
      return this.allShipsAreSunk() ? 'Game over. You win!' : 'You sank my ' + ship + '!';
    } else {
      return 'Hit!';
    }
}

Game.prototype.allShipsAreSunk = function(){
  return  this.battleship.sunk() &&
          this.firstDestructor.sunk() &&
          this.secondDestructor.sunk();
}

module.exports = Game;
