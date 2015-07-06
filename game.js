function Game(gridGenerator) {
  this.gridGenerator = gridGenerator;
}

Game.prototype.play = function(move) {
  return this.gridGenerator.updateWith(move);
}

module.exports = Game;
