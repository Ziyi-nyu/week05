let xPos = [0,  0, 0];
let yPos = [150,250,350];
let xVel = [2,3,4];
let cDiam = [40, 40, 40];


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  fill(20, 0,random(100,255));

  // draw circle
  ellipse(xPos[0], yPos[0], cDiam[0], cDiam[0]);
  ellipse(xPos[1], yPos[1], cDiam[1], cDiam[1]);
  ellipse(xPos[2], yPos[2], cDiam[2], cDiam[2]);

  // update pos
  xPos[0] = xPos[0]+ xVel[0];
  xPos[1] = xPos[1] + xVel[1];
  xPos[2] = xPos[2] + xVel[2];

  // if reset is needed: pick random diameter and reset x
  if (xPos[0] > width + cDiam[0]) {
    cDiam[0] = random(20, 75);
    xPos[0 ]= 0 - cDiam[0];
  }
  if (xPos[1] > width + cDiam[1]) {
    cDiam[1] = random(50, 125);
    xPos[1 ]= 0 - cDiam[1];
  }
  if (xPos[2] > width + cDiam[2]) {
    cDiam[2] = random(75, 200);
    xPos[2 ]= 0 - cDiam[2];
  }
  


  }

