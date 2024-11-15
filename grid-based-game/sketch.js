//Grid-based game
// Dinel Widyaratne
// Friday, November 8, 2024
//
// Extra for Experts:
// -Again I could be mistaken but I don't think we've used createVector()


let cols = 10;
let rows  = 10;
let cellSize = 50;

let player;
let gem;
let score = 0;
let music;

function preload() {
  music = loadSound("grid.mp3");
}

function setup() {
  createCanvas(cols * cellSize, rows * cellSize);
  music.amp(0.3);
  //Starting position
  player = createVector(0, 0);
  
  //places gym when the games starts
  placeGem();
}

function draw() {
  background(220);
  startGame();
}

function startGame() {
  //Draws the grid
  stroke(0);
  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < rows; j++) {
      noFill();
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }

  //creates the player with the color blue
  fill("blue");
  rect(player.x * cellSize, player.y*cellSize, cellSize, cellSize);

  //creates the gem with the color purple
  fill("purple");
  rect(gem.x * cellSize, gem.y * cellSize, cellSize, cellSize);

  //makes the scoreboard letters the color black
  fill(0);
  
  //scoreboard letter size is 25
  textSize(25);
  
  //scoreboard at the bottom left of the canvas
  text(`Score: ${score}`, 10, height - 10);
}

function keyPressed() {

  //moves the player left with the "a" key
  if (key === 'a' && player.x > 0) {
    player.x--;
  }
  //moves the player right with the "d" key
  else if (key === 'd' && player.x < cols - 1) {
    player.x++;
  }
  //moves the player up with the "w" key
  else if (key === 'w' && player.y > 0) {
    player.y--;
  }
  //moves the player down with the "s" key
  else if (key === 's' && player.y < rows - 1) {
    player.y++;
  }

  //when the player collects a gem a new one is placed
  if (player.x === gem.x && player.y === gem.y) {
    score++;
    placeGem();
  }
}

//randomly places a new gem and a random location
function placeGem() {
  gem = createVector(floor(random(cols)),floor(random(rows)));
}