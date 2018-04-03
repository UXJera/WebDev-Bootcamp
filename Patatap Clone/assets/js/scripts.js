var circles = [];

var sound1 = new Howl({
  src: ['assets/sounds/bubbles.mp3']
});
var sound2 = new Howl({
  src: ['assets/sounds/clay.mp3']
});

function onKeyDown(event) {

  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = Point.random();
  var point = maxPoint * randomPoint;
  var newCircle = new Path.Circle(point, 500);
  newCircle.fillColor = keyData[event.key].color;
  keyData[event.key].sound.play();
  circles.push(newCircle);
};

function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].fillColor.hue+=1;
    circles[i].scale(0.9);
    if(circles[i].area < 1){
      circles[i].remove(); // remove the circle from the canvas
      circles.splice(i, 1); // remove the circle from the array
      i--; // decrement i so that the loop doesn't skip a circle because of .splice()
      console.log(circles);
    }
  }
}
