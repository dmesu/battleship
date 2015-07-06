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

Game.prototype.decideGameStatusAfterHit = function(moveOutcome){
  if (moveOutcome === 'battleship'){
    this.battleship.hit();
    if (this.battleship.sunk()){
      if (this.allShipsAreSunk()){
        return 'Game over. You win!';
      }else{
        return 'You sank my battleship!';
      }
    } else {
      return 'Hit!';
    }
  }
  if (moveOutcome === 'first destructor'){
    this.firstDestructor.hit();
    if (this.firstDestructor.sunk()){
      if (this.allShipsAreSunk()){
        return 'Game over. You win!';
      }else{
        return 'You sank my first destructor!';
      }
    } else {
      return 'Hit!';
    }
  }

  if (moveOutcome === 'second destructor'){
    this.secondDestructor.hit();
    if (this.secondDestructor.sunk()){
      if (this.allShipsAreSunk()){
        return 'Game over. You win!';
      }else{
        return 'You sank my second destructor!';
      }
    } else {
      return 'Hit!';
    }
  }
}

Game.prototype.allShipsAreSunk = function(){
  return this.battleship.sunk() &&
          this.firstDestructor.sunk() &&
          this.secondDestructor.sunk();
}

module.exports = Game;
