// Sound Effects Demo

let bgMusicLoop;
let clickSounds;

function Preload() {
  bgMusicLoop = loadSound("good.mp3");
  clickSounds = loadSound("lvlup.ogg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusicLoop.amp(0.3);
  clickSounds.amp(1.0);
}

function draw() {
  background(220);
}

function keyPressed() {
  if (!bgMusicLoop.isPlaying()) {
    bgMusicLoop.loop();
  }
}

function mousePressed() {
  clickSounds.play();
}