//require inquirer
var inquirer = require('inquirer');
//require objects and exports from other files
var prompt = require('prompt');
var Game = require('./game.js');
var Word = require('./word.js');
// display challenger grill & headlights image
var grill = require('./extra.js');

console.log('---------------------------------------------------------');
console.log('');
console.log('Welcome to MOPAR or No Car Hangman!');
console.log('');
console.log('---------------------------------------------------------');
prompt.start();

// inquirer prompt - asks user Y or N on game - IF yes and ELSE no
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
        console.log('---HINT: Muscle Car Model Names from Dodge, Plymouth & Chrysler---');
        this.hangman.startGame();
        
    } else {
        console.log('Bye Bye and remember...MOPAR OR NO CAR!!!')
        console.log('');
        console.log(grill.graphic.grillGraphic);
    }
})

// make the entire game an object
hangman = {
    wordBank: ['challenger', 'super bee', 'roadrunner', 'gtx', 'charger'],
    guessesRemaining: 5,
    currentWord: null,

    //asks user if they are ready to play
    startGame: function () {
        // new game, resets guesses and gets new word from word list then prompts user
        this.resetGuesses();
        this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
        this.currentWord.pushLetter();
        this.currentWord.wordRender();
        this.promptUser();
    },
    // reset guesses function
    resetGuesses: function () {
        this.guessesRemaining = 5;
    },
    // prompt user function
    promptUser: function () {
        // need to substitute this to that since here "this" inside prompt.get is not game, it is npm prompt
        var that = this;
        prompt.get(['guessLetter'], function (err, result) {
            console.log("You guessed: " + result.guessLetter);
            // create variable to see if tell right or wrong
            var guessBool = that.currentWord.checkLetter(result.guessLetter);

            // if guess wrong guessRemaining--
            if (guessBool === 0) {
                console.log("WRONG!");
                that.guessesRemaining--;
            }
            // if guess right 
            else {
                console.log("CORRECT!!!");
                // if checkfind function return true, console.log win and stop
                if (that.currentWord.findLetter()) {
                    console.log("You won! The Word is: " + that.currentWord.word);
                    console.log("--------------------------------------------------");
                    return;
                }
            }
            // consolelog guessRemaining everytime no matter right or wrong
            console.log("Guesses remaining: " + that.guessesRemaining);
            console.log("--------------------------------------------------");
            // As long as there is still guess left and the word is found, keep prompt user and show word progress
            if ((that.guessesRemaining > 0) && (that.currentWord.find == false)) {
                that.currentWord.wordRender();
                that.promptUser();
            }
            // if no guess left, game over and show the correct word
            else if (that.guessesRemaining === 0) {
                console.log("Game over. The correct word is: " + that.currentWord.word);
            }
        });
    }

};

