var colour={
  r : 255,
  g : 186,
  b : 24
};
var circle = {
  x : 0,
  y : 100,
  diameter : 50
};
function setup(){
  createCanvas(400, 400);
}
function draw(){
  col = map(mouseX, 0, 400, 0, 255);
  background(col);
  noStroke();
  fill(255, 0, 0, 100);
  ellipse(width/2, circle.y, circle.diameter, circle.diameter);
  circle.y+=2;
  //colour.r--;colour.g--;colour.b--;
}
