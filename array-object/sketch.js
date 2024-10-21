// Array and Object Notation
// Dinel Widyaratne
// October 21, 2024
//
// Extra for Experts:
// I could be mistaken but I don't think we've usen noLoop() in a demo before.

let turtles;
let finishLine;
let winner;
let r = 200;
let b = 200;
let g = 255;
let bgMusic;

function preLoad() {
  bgMusic = loadSound("tune.wav");
}

function setup() {
  createCanvas(800, 500); // canvas 800 pixels wide and 500 pixels high
  finishLine = width - 50; // draws the finish line on the edge 50 pixels from the right
  resetRace(); // resets the race after the previous one has finished
}

function draw() {
  background(r, g, b);
  startGame();
}

function startGame() {
  //Draws the finish line
  stroke(0); //makes the finish line appear black
  line(finishLine, 0, finishLine, height);

  //Draws the turtle with their appropriate color
  for(let turtle of turtles) {
    fill(turtle.color);
    noStroke();

    // the shape of the turtles
    ellipse(turtle.x, turtle.y, 50, 50);
    
    // moves the turtle randomly by 1-5 pixels
    turtle.x += random(1, 5); 

    // checks for a winner
    if (turtle.x >= finishLine && !winner) { 
      winner = turtle.color;
    }
  }
  if (winner) {
    textSize(35); //how big the text is when the winner is called
    fill(0); // makes the text appear in the color black
    text(winner + " wins!", 50, height / 2); // displays "turtle.color wins!" with a width of 50 and a height divided by 2
    noLoop(); //stops the draw loop after a winner is picked so it doesn't go infinitely
  }
}


function resetRace() {
  turtles = [
    {x: 50, y: 100, color: "red" }, //makes the red turtle
    {x: 50, y: 200, color: "blue" }, //makes the blue turtle
    {x: 50, y: 300, color: "green" }, //makes the green turtle
    {x:50, y:400, color: "purple" }, ////makes the purple turtle
  ];
  winner = null; // no value for now
}
function keyPressed() {
  if (winner) {
    resetRace();
    loop();//restarts the draw loop after a key is pressed
  }
}

