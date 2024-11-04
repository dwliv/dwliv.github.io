// Grid Demo
// Dan Schellenberg
// Oct 22, 2024

let grid;
const GRID_SIZE = 10;
let cellSize;
let shouldToggleNeighbours = false;
const OPEN_TILE = 0;
const IMPASSIBLE_TILE = 1;
const PLAYER_tile = 9;
let player = {
  x: 0,
  y: 0,
};
let grassImg;
let pathImg;

function preload() {
  grassImg = loadImage("grass.JPG");
  pathImg = loadImage("path.JPG");
}

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  grid[player.y][player.x] = PLAYER_tile;
}

function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);

  //toggle neighbours
  if (shouldToggleNeighbours) {
    toggleCell(x + 1, y);
    toggleCell(x - 1, y);
    toggleCell(x, y + 1);
    toggleCell(x, y - 1);
  }
}

function toggleCell(x, y) {
  //make sure the cell you're toggling is in the grid
  if (x >= 0 && y >= 0 && x < GRID_SIZE && y < GRID_SIZE) {
    if (grid[y][x] === IMPASSIBLE_TILE) {
      grid[y][x] = OPEN_TILE;
    }
    else if(grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSIBLE_TILE;
    }
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "n") {
    shouldToggleNeighbours = !shouldToggleNeighbours;
  }
  if (key === "w") {
    //move up
    movePlayer(player.x, player.y - 1);
  }
  if (key === "s") {
    //move down
    movePlayer(player.x, player.y + 1);
  }
  if (key === "d") {
    //move right
    movePlayer(player.x + 1, player.y);
  }
  if (key === "a" || key === "q") {
    //move left
    movePlayer(player.x - 1, player.y);
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === IMPASSIBLE_TILE) {
        //fill("black");
        image(grassImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === OPEN_TILE) {
        //fill("white");
        image(pathImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER_tile) {
        fill("red");
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}

function movePlayer(x, y) {
  if (x >= 0 && x < GRID_SIZE &&  y >= 0 && y < GRID_SIZE && grid[y][x] === OPEN_TILE) {
    grid[player.y][player.x] = OPEN_TILE;
    player.x = x;
    player.y = y;
    grid[player.y] [player.x] = PLAYER_tile;
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //choose either 0 or 1, each 50% of the time
      if (random(100) < 50) {
        newGrid[y].push(IMPASSIBLE_TILE);
      }
      else {
        newGrid[y].push(OPEN_TILE);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}