// Array and Object Notation
// Dinel Widyaratne
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let turtles;
let finishLine;
let winner;
let r = 200;
let b = 200;
let g = 255;

function setup() {
  createCanvas(800, 500);
  finishLine = width - 50;
  resetRace();
}

function draw() {
  background(r, g, b);
  stroke(0);
  line(finishLine, 0, finishLine, height);
  for(let turtle of turtles) {
    fill(turtle.color);
    noStroke();
    ellipse(turtle.x, turtle.y, 50, 50);  
    turtle.x += random(1, 4);
    if (turtle.x >= finishLine && !winner) {
      winner = turtle.color;
    }
  }
  if (winner) {
    textSize(35);
    fill(0);
    text(winner + " wins!", 50, height / 2);
    noLoop(); //stops the draw loop
  }
}

function resetRace() {
  turtles = [
    {x: 50, y: 100, color: "red" },
    {x: 50, y: 200, color: "blue" },
    {x: 50, y: 300, color: "green" },
    {x:50, y:400, color: "purple" },
  ];
  winner = null; // no value for now
}
function keyPressed() {
  if (winner) {
    resetRace;
    loop();//restarts the draw loop
  }
}

