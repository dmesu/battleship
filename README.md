# Battleship

#### Specification: 
Implementing a very basic game of battleships. 
A simple console application in terminal should allow a single human player to play a one-sided game of battleships against the computer. 
The program should create a 10x10 grid, and place a number of ships on the grid at random with the following sizes:

 - 1x Battleship (5 squares)
 - 2x Destroyers (4 squares)

The console application should accept input from the user in the format “A5” to signify a square to target, and feedback to the user whether the shot was success.
Additionally, it should report on the sinking of any vessels.


#### Implementation:

This implementation follows an ATDD and OOP approach using Mocha as testing framework, Chai for assertions and Sinon for stubs. 

After writing an initial design in paper, I wrote the first acceptance test. Once I've got every component in the acceptance test (without any implementation in the production code) I started following the TDD apporach using unit tests for every component. 

The program is structured in 5 classes: game, grid, gridGenerator, cell and ship. Game has the responsibility of deciding what happens when a hit occurs in a ship. Grid decides if a hit happens at all. GridGenerator creates a grid with some ships randomly placed (in this version of the code those ships are hardcoded). 

In the interactor is where I’m using the only, apart from the testing ones, third party library (https://github.com/flatiron/prompt). This library allows using the console with NodeJS.

#### TODOs:

- I’m not placing randomly the ships on the grid. The grid is harcoded with some ships on it. Anyway, the code is structured for being able to receive the ships as parameter and create the grid with them in case of having the proper logic.
- I’m not validating the input. If the user don’t write the expected combination of one letter plus one number in a range of 1-10, the application will crash.
- The application runs in an infinite loop, unless you type "q".



In order to run the application, clone the repo and execute in your terminal:

```
npm install
node userInteractor.js
```

In order to execute the tests, run in your terminal: 

```
mocha --recursive
```

