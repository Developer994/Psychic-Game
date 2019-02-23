"use strict";
var score = 0;
var losses = 0;
var attempts = 9;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var secretLetterGenerated = " ";
var gameReset = true;
var guessedLetters = " ";
var guess = " ";

document.getElementById("Score").innerHTML = score;
document.getElementById("Losses").innerHTML = losses;
// The code below generates the random letter
// random = Math.floor(Math.random() * 26);
// secretLetterGenerated = letters[random];
// console.log("The secret letter is " + secretLetterGenerated);


var random = Math.floor(Math.random() * 26);
secretLetterGenerated = letters[random];
console.log("The secret letter is " + secretLetterGenerated);

// The onclick event begins with the function below. In other words, once the user clicks the continue button, the whole function does its task.
function myFunction() {


  // The for loop starts in the code below
  for (var i = 1; i < 10; i++) {

    // This is where the user gets asked about the secret letter.
    guess = prompt("Guess the right letter. You have " + attempts + " attempts left." + " Letters you guessed: " + guessedLetters);
    guessedLetters = guessedLetters + guess;
    document.getElementById("lettersGuessed").innerHTML = "Your guesses so far: " + guessedLetters;


    // The Condition if the user gets the word right:
    if (guess === secretLetterGenerated) {
      alert("You Win");
      console.log("You Win!");
      console.log(score);
      score++;
      attempts = 9;
      gameReset = false;
      document.getElementById("Score").innerHTML = score;
      guessedLetters = " ";
      var random = Math.floor(Math.random() * 26);
      secretLetterGenerated = letters[random];
      console.log("The secret letter is " + secretLetterGenerated);
      break;
    }


    // The code below is for if the user gets one guess wrong.
    else {
      attempts--;
      console.log("try again");

      // The next part is the condition if the user uses up all the attempts they have:
      if (attempts === 0) {
        losses++;
        alert("You lose this round!");
        console.log("You lose");
        console.log(losses);
        attempts = 9;
        document.getElementById("Losses").innerHTML = losses;
        // If statement for if you get 9 losses
        if (losses === 9) {
          console.log("Game Over");
          alert("Game Over. Try again.")
          score = 0;
          losses = " ";
        }
        break;

      }

    }
  }
}





