//constructor function for the Word object
function Word(word) {
    this.word = word;
    
    this.checkLetter = function(letter, letters) {
      var letterFound = false;
      for (var i=0; i<this.word.length; i++) {
        if (this.word.charAt(i).toLowerCase() == letter.toLowerCase()) {
          letterFound = true;
          letters[i].changeShown();
        }
      }
      return letterFound;
    }
    
  module.exports = Word;