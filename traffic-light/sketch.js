// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let time = 6000;
let time2 = 2000;
let time3 = 6000;
let CS = 1;
let lt = 0;


function setup() {
  background(255);
  createCanvas(600, 600);
  drawOutlineOfLights();
}

function draw() {
  lightColor();
}

function drawOutlineOfLights() {
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function lightColor() {
  if(millis()> lt + time2 && CS === 1) {
    drawOutlineOfLights();
    fill(255,0,0);
    ellipse(width/2, height/2 - 65, 50, 50);
    lt = millis();
    CS = 2;
  }
  if(millis()> lt + time1 && CS === 2) {
    fill(0,255,0);
    ellipse(width/2, height/2 - 65, 50, 50);
    lt = millis();
    CS = 3;
  }
  if(millis()> lt + time3 && CS === 3) {
    fill(255,255,0);
    ellipse(width/2, height/2 - 65, 50, 50);
    lt = millis();
    CS = 1;  
  }
}