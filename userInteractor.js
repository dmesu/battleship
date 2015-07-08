var GridGenerator = require('GridGenerator');
var prompt = require('prompt');
var Game = require('game');
var Ship = require('ship');

var gridGenerator = new GridGenerator();
var grid = gridGenerator.generate();

var game = new Game(grid, new Ship(5), new Ship(4), new Ship(4));

function response(err, input) {
  if(input.move !== 'q') {
    console.log('COMPUTER says --> ', game.play(input.move));
    console.log('*** Write "q" for leaving the game ***');
    return prompt.get(['move'], response);
  }
}

prompt.get(['move'], response);

prompt.start();

