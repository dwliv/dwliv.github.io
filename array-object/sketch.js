// Array and Object Notation
// Dinel Widyaratne
// October 21, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let bg;

function preLoad() {
  bg = loadImage("game.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(bg, bg.width * 0.5, bg.height * 0.5);
}
