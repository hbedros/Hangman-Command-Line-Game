var Word = require("./word.js");

module.exports = {
  //selects a random word from the array of words and returns it as a Word object
  selectWord : function() {
    var words = ["Guatemala", "Bangladesh", "Indonesia", "Switzerland", "Australia"];
    var num = Math.floor(Math.random() * 5);
    var word = new Word(words[num]);
    return word;
  }
};