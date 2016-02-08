var GridGenerator = require('gridGenerator')
  , prompt = require('prompt')
  , Game = require('game')
  , Ship = require('ship');

var gridGenerator = new GridGenerator()
  , grid = gridGenerator.generate()
  , game = new Game(grid, new Ship(5), new Ship(4), new Ship(4))
  , exitKeyword = 'q';

prompt.start();

prompt.get(['move'], processResponse);

function processResponse(err, input) {
  var sanitizedInput = input.move.toLowerCase();
  if(sanitizedInput !== exitKeyword) {
    console.log('COMPUTER says --> ', game.play(sanitizedInput));
    console.log('*** Write "q" for leaving the game ***');
    return prompt.get(['move'], processResponse);
  }
}

