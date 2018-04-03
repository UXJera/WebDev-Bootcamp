var numOfSquares = 6;
var colors = [];
var pickedColor = pickColor();

// Event listeners
var colorDisplay = document.getElementById('colorDisplay');
var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('#message');
var h1Display = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easy');
var hardBtn = document.querySelector('#hard');
var modeButtons = document.querySelectorAll('.mode');

// reset game
resetButton.addEventListener('click', function(){
  this.textContent = "New Colors";
  reset();
  setUpSquares();
});

// display the goal color
colorDisplay.textContent = pickedColor;

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // Add click listeners to squares
    squares[i].addEventListener('click', function(){
      // grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to pickedColor
      if (clickedColor === pickedColor) {
        changeColors(clickedColor);
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        h1Display.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
};


// Changes all squares to winning color when completed
function changeColors(color){
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// Pick a random item from array
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generate an array of random colors
function generateRandomColors(num) {
  var arr = [];
  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

// Generate a random color
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb("+r+", "+g+", "+b+")";
}

function generateColors() {
  // generate a new array of colors
  colors = generateRandomColors(numOfSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change h1 span for picked color
  colorDisplay.textContent = pickedColor;
  // reset colors of squares through loop
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      // reveal all squares
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      // if more squares than needed, hide them
      squares[i].style.display = "none";
    }
  }
}

// resets everything and generates new colors
function reset() {
  messageDisplay.textContent = "";
  h1Display.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  generateColors();
}

// set up mode buttons
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
      reset();
    });
  }
}

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}

init();
