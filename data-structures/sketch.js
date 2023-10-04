let xPos0 = 0;
let yPos0 = 150;
let xVel0 = 2;
let cDiam0 = 40;

let xPos1 = 0;
let yPos1 = 350;
let xVel1 = 4;
let cDiam1 = 80;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("lightblue");
  fill(20, 0,random(100,255));

  // draw circle
  ellipse(xPos0, yPos0, cDiam0, cDiam0);
  ellipse(xPos1, yPos1, cDiam1, cDiam1);

  // update pos
  xPos0 = xPos0+ xVel0;
  xPos1 = xPos1 + xVel1;

  // if reset is needed: pick random diameter and reset x
  if (xPos0 > width + cDiam0) {
    cDiam0 = random(20, 75);
    xPos0 = 0 - cDiam0;
  }
  if (xPos1 > width + cDiam1) {
    cDiam1 = random(50, 125);
    xPos1 = 0 - cDiam1;
  }
  function draw(){


  }
}
