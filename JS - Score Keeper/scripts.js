var p1button = document.getElementById("player1");
var p2button = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");

var h1p1score = document.querySelector("#player1Score");
var h1p2score = document.getElementById("player2Score");

var numInput = document.querySelector("input[type='number']");
var playTo = document.querySelector("#playToScore"); // or ("p span")

var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function() {
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      h1p1score.classList.add("winner");
      gameOver = true;
    }
    h1p1score.textContent = p1score;
  }
});

p2button.addEventListener("click", function() {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      h1p2score.classList.add("winner");
      gameOver = true;
    }
    h1p2score.textContent = p2score;
  }
});

resetButton.addEventListener("click", function() {
  // Converted this into a reusable function
  reset();
});

// Change event runs whenever a value changes
numInput.addEventListener("change", function(){
  winningScore = Number(this.value);
  playToScore.textContent = winningScore;
  reset();
});

function reset() {
  p1score = 0;
  h1p1score.textContent = p1score;
  h1p1score.classList.remove("winner");

  p2score = 0;
  h1p2score.textContent = p2score;
  h1p2score.classList.remove("winner");

  numInput.value = '';
  gameOver = false;
}
