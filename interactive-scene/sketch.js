// Interactive Scene
// Dinel Widyaratne
// October 1, 2024
//Comp Sci 30
// Extra for Experts:
// - Added Text to the top of the canavs ("PING PONG")


//x coordinate
let xcor = 200;  
// y coordinate
let ycor = 200; 
// velocity along x axis
let dx = 5; 
// velocity along y axis
let dy = 3; 
//the size of the ball when the code starts
let ballSize = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //draws the left rectangle with x = 10, y = ycor and a width of 10 and a height of 80
  rect(10, ycor, 10, 80);
  
  // draws the right rectangle with x = 380, mouseY being controlled bu the mouse moving it vertically. with a width of 10 and height of 80
  rect(380, mouseY, 10, 80);
  ellipse(xcor,ycor,ballSize,ballSize);
 
  //changes the ball's movement direcetion when it hits the edge of the canvas
  if(xcor>= width-20 || xcor===20){
    dx = -dx;
  }
  if(ycor>= height-20||ycor === 20) {
    dy = -dy;
  }
  fill("black")
  text("PING PONG", 150, 25);
  
  //creates the dashed line down the middle
  for(let i = 0; i<400; i+=20){
    line(200, i, 200, i+10);
  }
  
  // updates the x coordinate by adding dx to xpos
  xcor = xcor + dx;
  
  // updates the y coordinate by adding dy to ypos
  ycor = ycor + dy;
}

//Increases Ball size when s or S key is pressed
function keyPressed() {
  if (key === "s" || key === "S") {
    ballSize += 5;
  }
   
  //decreases the ball size but make sure it doesn't go below 5
  else if (key === "d" || key === "D") {
    ballSize = max(5, ballSize  - 5);
  }
}
