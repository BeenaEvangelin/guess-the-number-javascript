"use strict";
/*console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Hurrayyy!! Correct Answer!"; // A basic DOM manipulation
console.log(document.querySelector(".message").textContent);

//  some basic DOM manipulation
document.querySelector(".number").textContent = 12;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 1; */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value); //converts the string into number
  console.log(number, typeof number);

  if (!number) {
    displayMessage("Enter a Valid number.");
  } else if (number === secretNumber) {
    displayMessage("Hurrayyy!! Correct Answer!");

    document.querySelector("body").style.backgroundColor = "#499b30";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (number !== secretNumber) {
    if (score > 1) {
      displayMessage(
        number > secretNumber
          ? "Entered number is too high!"
          : "Entered number is too low!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game. Better luck next time!!");

      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(203, 32, 32)";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  console.log(displayMessage("Start guessing..."));
});
