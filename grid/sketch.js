// Grid Demo


//let grid = [[1, 0, 1, 0]
//[0, 0, 1, 1]
//[1, 1, 1, 0]
//[0, 1, 1, 0]];
            
const GRID_SIZE = 40;
let cellSize;
let grid;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowHeight);
  }
  else {
    createCanvas(windowHeight, windowWidth);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e") {
    grid = generateEmptyGrud(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++ ) {
      //choose either 0 or 1, each 50% of the time
      if(random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}
