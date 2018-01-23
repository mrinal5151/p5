var colour={
  r : 255,
  g : 186,
  b : 24
};
var circle = {
  x : 0,
  y : height/2,
  diameter : 50
};
function setup(){
  createCanvas(800, 800);
}
function draw(){
  col = map(mouseX, 0, 400, 0, 255);
  background(col);
  noStroke();
  fill(108, 187, 255);
  ellipse(mouseX, circle.y, circle.diameter, circle.diameter);
  
  //colour.r--;colour.g--;colour.b--;
}
