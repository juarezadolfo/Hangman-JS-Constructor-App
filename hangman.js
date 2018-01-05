//require inquirer
var inquirer = require('inquirer');
//require objects and exports from other files
var Game = require('./game.js');
// display challenger grill & headlights image
var grill = require('./extra.js');

// start the game inquirer prompt - answer leads to new game
// calling 'startGame' function
startGame();

function startGame() {
    console.log('---------------------------------------------------------');
    console.log('');
    console.log('Welcome to MOPAR or No Car Hangman!');
    console.log('');
    console.log('---------------------------------------------------------');

    inquirer.prompt([
        {
            name: 'play',
            type: 'confirm',
            message: 'Ready to play MOPAR Hangman?'
        }
    ]).then(function (answer) {
        if (answer.play) {
            console.log('---------------------------------------------------------');
            console.log('');
            console.log('Get ready to rumble...MOPAR OR NO CAR!');
            console.log('');
            console.log('---------------------------------------------------------');
            newGame();

        } else {
            console.log('Bye Bye and remember...MOPAR OR NO CAR!!!')
            console.log('');
            console.log(grill.graphic.grillGraphic);
        }
    })
}