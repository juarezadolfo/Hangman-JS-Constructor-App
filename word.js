// require letter objects
var Letter = require('./letter.js');

var Word = function (wrd) {
    //grab and store the parameter wrd
    this.word = wrd;
    //array of letter objects
    this.letters = [];
    // indicate if user find the word, default should be false
    this.find = false;

    //populates-pushes the letter array above with new Letter objects
    this.pushLetter = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter);
        }
    };

    // checks to see if guessed letter is in the word
    this.checkLetter = function (guessedLetter) {
        // letter counter
        var counter = 0;
        // iterates through each letter to see if match with guessed letter
        // if letter is the guessed letter, change the indicator to true
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].letter == guessedLetter) {
                this.letters[i].show = true;

                counter++;
                // console.log(counter);
            }
        }
        // number of letters shown
        return counter;

    };

    // check to see if user find the word
    this.findLetter = function () {
        // check every letter in the letter array, if all of the indiator is true, then return true, otherwise, return false
        this.find = this.letters.every(function (ltr) {
            // console.log(ltr.show);
            return ltr.show;
        });
        // console.log(this.find);
        return this.find;
    };

    // show word
    //render the word based on if letters are found or not
    this.wordRender = function () {
        var wordDisplay = '';
        for (var i = 0; i < this.letters.length; i++) {
            wordDisplay += this.letters[i].letterRender();
        }
        console.log(wordDisplay);
    };

}

module.exports = Word;
// console.log(Word);
