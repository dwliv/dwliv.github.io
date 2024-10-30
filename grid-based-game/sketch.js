//Grid-based game
// Dinel Widyaratne
// Friday, November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cols = 10;
let rows  = 10;
let cellSize = 25;

let player;
let gem;
let score = 0;

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  player = createVector(0, 0);
  placeGem();
}

function draw() {
  background(220);
  stroke(0);
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      noFill();
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
  fill(0, 0, 255);
  rect(player.x * cellSize, player.y*cellSize, cellSize, cellSize);

  fill(255,0,255);
  rect(gem.x*cellSize, gem.y*cellSize, cellSize, cellSize);

  textSize(15);
  
}

function placeGem() {
  gem = createVector(floor(random(cols)),floor(random(rows)));
}
