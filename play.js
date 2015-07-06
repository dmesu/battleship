var prompt = require("prompt");

prompt.start();

function response(err, result) {
  console.log('  move: ' + result.move);
  console.log('Write "exit" for leaving the game.')
  if(result.move !== "exit") {
    return prompt.get(['move'], response);
  }
}

prompt.get(['move'], response);






