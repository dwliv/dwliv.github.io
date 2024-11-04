//Grid-based game
// Dinel Widyaratne
// Friday, November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let cols = 10;
let rows  = 10;
let cellSize = 50;

let player;
let gem;
let score = 0;

function preload() {
  gemImg = loadImage("gem.png");
}

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
  image(gemImg, player.x, player.y, cellSize, cellSize);

  fill(0);
  textSize(15);
  text('Score $(score)', 10, height-10);
}

function keyPressed() {
  if (key === 'a' && player.x > 0) {
    player.x--;
  }
  else if (key === 'd' && player.x < cols - 1) {
    player.x++;
  }
  else if (key === 'w' && player.y > 0) {
    player.y--;
  }
  else if (key === 's' && player.y < rows - 1) {
    player.y++;
  }

  if (player.x === gem.png && player.y === gem.png.y) {
    score++;
    placeGem();
  }
}

function placeGem() {
  gem = createVector(floor(random(cols)),floor(random(rows)));
}
