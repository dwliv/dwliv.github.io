// Array and Object Notation
// Dinel Widyaratne
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bx = 200;  
let by = 200; 
let dx = 5; 
let dy = 3; 
let ballSize = 10;
let obstacleArray = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  displayrects();
  player();
  ballSize();
}

function player() {

}

function spawnObsticles() {
  let someRect = {
    x: random(0, width),
    y: height + random(0, 50),
    speed: random(2, 5),
    radius: random(20, 50),
    r: random(255),
    g: random(255),
    b: random(255),
    alpha: random(255),
    timeX: random(100000000),
    timeY: random(100000000),
    deltaTime: 0.006,
  };
  theBubbles.push(someBubble);
}

function clickedOnBubble(x, y, theBubble) {
  let distanceAway = dist(x, y, theBubble.x, theBubble.y); 
  return distanceAway < theBubble.radius;
}
function displayrects() {
  for (let bubble of theBubbles) {
    noStroke();
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x, bubble.y, bubble.radius * 2);
  }
}
