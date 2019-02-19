"use strict";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var points = 0;
var attemptsLeft = 9;
var losses = 0;

let secretLetterGenerated = "";
let random;



random = Math.floor(Math.random() * 26);
secretLetterGenerated = letters[random];
console.log("The Secret letter is " + secretLetterGenerated);

// Making the loop for attempt to go down
function myFunction() {

  for (var i = 1; i < 10; i++) {
    var guess = prompt("Guess a letter. You have this " + attemptsLeft + " attempts left");
    console.log("You guessed " + guess);
    if (guess === secretLetterGenerated) {
      alert("You guessed it right!");
      points++;
      var score = points;
      document.getElementById("wins").innerHTML = "Wins: " + score;
      console.log("My Points: " + points);
      random = Math.floor(Math.random() * 26);
      secretLetterGenerated = letters[random];
      console.log("The Secret letter is " + secretLetterGenerated);
      if (points === 9) {
        alert("You Win the Game! The game has been restarted to 0 points.");
        points = 0;
        score = points;
        break;
      }
      break;
    } else {

      attemptsLeft--;
      console.log("losses " + losses);
      if (attemptsLeft === 0) {
        losses++;
        document.getElementById("demo").innerHTML = "Please try again";
        attemptsLeft = 9;
      }
    }

  }
}
console.log("losses" + losses);





