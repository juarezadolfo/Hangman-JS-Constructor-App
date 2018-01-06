// letter constructor
var Letter = function (ltr) {
    // property to store the actual letter
    this.letter = ltr;
    // default property for hiding letters
    this.show = false;
    // if it doesn't appear, it returns a ' _ '
    // /otherwise it just appears as itself
    this.letterRender = function () {
        if (this.show === false) {
            return ' _ ';
        } else {
            return this.letter;
        }

    };
};
// test
// console.log(Letter);

// export constructor to use over in word.js
module.exports = Letter;

