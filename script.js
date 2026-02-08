let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
  let num = document.getElementById("userInput").value;
  let gameResult = document.getElementById("gameResult");
  let guessedNumber = parseInt(num);
  console.log("guessed number: " + guessedNumber);
  console.log("random number: " + randomNumber);
  if (guessedNumber === randomNumber) {
    gameResult.textContent = "congrats you guessed the number";
    gameResult.style.backgroundColor = "green";
    console.log("congrats you guessed the number");
  } else if (guessedNumber > randomNumber) {
    gameResult.textContent = "too high";
    gameResult.style.backgroundColor = "red";
    console.log("too high");
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "too low";
    gameResult.style.backgroundColor = "red";
    console.log("too low");
  }
}
