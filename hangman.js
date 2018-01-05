//require inquirer
var inquirer = require('inquirer');
//require objects and exports from other files
var Game = require('./game.js');
// display challenger grill & headlights image
var grill = require('./extra.js');

var hangman = {
    wordBank: Game.wordsList,
    guessesRemaining: 10,
    //empty array to hold letters guessed by user
    guessedLetters: [],
    display: 0,
    currentWord: null,
    //asks user if they are ready to play
    startGame: function () {

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
}

// start the game inquirer prompt
hangman.startGame();





