let xPos = [];
let yPos = [];
let xVel = [];
let cDiam = [];
let numCircles = 10;


function setup() {
  createCanvas(800, 600);
  for(let i = 0; i < numCircles; i ++){
     xPos.push(0);
     yPos.push(random(30, height - 30));
     xVel.push(random(2,5));
     cDiam.push(random(20, 70));
}}

function draw() {
  background("lightblue");
  fill(20, 10,100);

  for(let i = 0; i < numCircles; i +=1){
    ellipse(xPos[i],yPos[i],cDiam[i],cDiam[i])
  xPos[i] = xPos[i] + cDiam[i];

  // if reset is needed: pick random diameter and reset x
  if (xPos[i] > width + cDiam[i]) {
    cDiam[i] = random(20, 75);
    xPos[i]= 0 - cDiam[i];
  }
  }
  }


