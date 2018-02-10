var inquirer = require("inquirer");
var game = require("./index.js");
var Letter = require("./letter.js");

var word = game.selectWord();
var selectedWord = word.word;
var letters = [];
for (var i=0; i<selectedWord.length; i++) {
  letters.push(new Letter(selectedWord.charAt(i)));
}
var guessesLeft = 5;
makeGuess();

//function that gets called as long as the word has not been guessed and there are guesses left
function makeGuess() {
  displayWord();
  inquirer.prompt({name: "letter", message: "Please enter a letter:"}).then(function(answer) {
    if (word.checkLetter(answer.letter, letters) == true) {
      console.log("Good job!");

    }
    else {
      guessesLeft--;
      if (guessesLeft > 0) {
        console.log("Incorrect. You have " + guessesLeft + " guesses left.");
      }
      else {
        console.log("Incorrect. Game over!");
      }
    }
    if (word.checkIfSolved(letters) == false) {
      if (guessesLeft > 0) {
        makeGuess();
      }
    }
    else {
      displayWord();
      console.log("You win!");
    }
  });
}

function displayWord() {
  var displayedWord = "";
  for (var i=0; i<letters.length; i++) {
    displayedWord += letters[i].printLetter();
    displayedWord += " ";
  }
  console.log(displayedWord);
}