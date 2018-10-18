var position = 100
var name = 'Andrew Cochrane'
var moving = true
var forward = true
var positionX = 100
var positionY = 100
var speedX = 10
var speedY = 5
var counter = 0

function setup() {
  createCanvas(400, 200)
}

function draw() {
  background(100)
  rect(positionX, positionY, 10, 10)
  text('My name is ' + name, 10, 30)
  text(counter, 10, 70)
  if (moving) {
    positionX = positionX + speedX;
    counter++
    //positionY = positionY + speedY
    if (positionX >=400 || positionX <0) {
      speedX = speedX
      counter++
    //}if (positionY >=200 || positionY <0){
    //  speedY = speedY
    }
    console.log('The position is ' + position) 
  }

}
function mousePressed() {
  moving = !moving
}  

