// Bubble Object Notation Demo
// showing how to delete objects from the array

let theBubbles = [];
let deathLocations = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 5; i++) {
    spawnBubble();
  }

  //create new bubble every 0.5 secs
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);
  //moveBubblesRandomly();
  moveBubblesWithNoise();
  displayBubbles();
}

function mousePressed() {
  for(let Bubble of theBubbles) {
    if(clickedOnBubble(mouseX, mouseY, Bubble)) {
      let theIndex = theBubbles.indexOf(Bubble);
      theBubbles.splice(theIndex,1);
      addDeath(mouseX, mouseY);
    }
  }
}

function displayDeathSpots() {
  for (let spot of deathLocations) {
    textAlign(CENTER, CENTER);
    fill("black");
    text("X", spot.x, spot.y);
  }
}

function addDeath(_x, _y) {
  let deathSpot = {
    x: _x, 
    y: _y,
  };
  deathLocations.push(deathSpot);
}

function clickedOnBubble(x, y, theBubbles) {
  let distanceAway = dist(x, y, theBubbles.x, theBubbles.y);
  return distanceAway < theBubbles.radius ;   
}



function moveBubblesWithNoise() {
  for(let Bubble of theBubbles) {
    Bubble.x = noise(Bubble.timeX) * width;
    Bubble.y = noise(Bubble.timeY) * height;

    Bubble.timeX += Bubble.deltaTime;
    Bubble.timeY += Bubble.deltaTime;
  }
}

function moveBubblesRandomly() {
  for(let Bubble of theBubbles) {
    let choice = random(100);
    if(choice < 50) {
      //move up
      Bubble.y -= Bubble.speed;
    }
    else if (choice<65) {
      Bubble.y += Bubble.speed;
    }
    else if (choice<75) {
      Bubble.x += Bubble.speed;
    }
    else {
      Bubble.x -= Bubble.speed;
    }
  }
}

function displayBubbles() {
  for(let Bubble of theBubbles) {
    noStroke();
    fill(Bubble.r, Bubble.g, Bubble.b, Bubble.alpha);
    circle(Bubble.x, Bubble.y, Bubble.radius*2);
  }
}

function spawnBubble() {
  let someBubble = {
    x: random(0, width),
    y: height + random(0,50),
    speed: random(2,5),
    radius: random(20,50),
    r: random(0,255),
    g: random(0,255),
    b: random(0,255),
    alpha: random(0,255),
    timeX: random(10000000),
    timeY: random(10000000),
    deltaTime: 0.003,
  };
  theBubbles.push(someBubble);
}