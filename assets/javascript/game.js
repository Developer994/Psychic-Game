"use strict";
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var points = 0;
var attemptsLeft = 9;
var losses = 0;
var debug = false;

let secretLetterGenerated = "";
let random;



random = Math.floor(Math.random() * 26);
secretLetterGenerated = letters[random];
if (debug === true) { console.log("The Secret letter is " + secretLetterGenerated); }
document.getElementById("demo").innerHTML = "You have " + losses + " losses and the score is " + points + " points";
// Making the loop for attempt to go down
function myFunction() {

  for (var i = 1; i < 10; i++) {
    var guess = prompt("Guess a letter. You have this " + attemptsLeft + " attempts left");
    if (debug === true) { console.log("You guessed " + guess); }
    if (guess === secretLetterGenerated) {
      alert("You guessed it right!");
      points++;
      document.getElementById("demo").innerHTML = "You have " + losses + " losses and " + points + " points";
      if (debug === true) { console.log("User Wins") }
      var score = points;
      document.getElementById("score").innerHTML = "Score: " + score;
      console.log("My Points: " + points);
      random = Math.floor(Math.random() * 26);
      secretLetterGenerated = letters[random];
      if (debug === true) { console.log("The Secret letter is " + secretLetterGenerated); }
      if (points === 9) {
        alert("You Win the Game! The game has been restarted to 0 points.");
        points = 0;
        score = points;
        break;
        if (debug === true) { console.log("User wins and points need to go back to 0"); }
      }
      break;
    } else {
      attemptsLeft--;
      if (debug === true) { console.log("Attempt went down by 1, the losses are " + losses); }
      if (attemptsLeft === 0) {
        losses++;
        alert("You lost this round.")
        document.getElementById("tryAgain").innerHTML = "Please try again";
        attemptsLeft = 9;
        document.getElementById("demo").innerHTML = "You have " + losses + " losses and " + points + " points";
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        if (debug === true) { console.log("Losses go up by 1, and attempts are back to 9", attemptsLeft, losses); }
      }
    }
  }
}
if (debug === true) { console.log("losses" + losses); }





