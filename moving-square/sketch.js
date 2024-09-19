//Square moving around screen
//Sept 19, 2024


let x = 0;
let y = 0;
let direction = 1;
let size = 50;
let speed = 10;
const RIGHT_DIR = 1;

function setup() {
  createCanvas(400, 400);
  frameRate(60)
}

function draw() {
  background(220);
  displaySquare();
  moveSquare();
}

function moveSquare() {
  if(direction === RIGHT_DIR){
    x += speed;
     if (x >= 400 - size) {
      direction = 2;
    }
  }
  else if (direction === 2){
    y += speed;
    if (y >= 400 - size) {
      direction = 3;
    }
  }
  else if (direction === 3){
    x -= speed;
    if (x <= 0) {
      direction = 4;
    }
  }
  else if (direction === 4){
    y -= speed;
    if (y <= 0) {
      direction = 1;
    }
  }
}

function displaySquare() {
  square(x,y,size);
  fill('red')
}

function mouseWheel(event) {
  size += (event.delta/100);
  console.log(event.delta);
  // Uncomment to prevent any default behavior.
  // return false;
}
