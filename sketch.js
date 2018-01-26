var colour={
  r : 255,
  g : 186,
  b : 24
};
var circle = {
  x : 0,
  y : 600/2,
  diameter : 50
};
var s=0;
function setup(){
  createCanvas(600, 600);
}
function draw(){
  
  col = map(mouseX, 0, width, 0, 255);
  background(col);
  noStroke();
  fill(255, 0, 0);
  ellipse(s, s, s, s, 100);
  s++;  
  noStroke();
  fill(108, 187, 255);
  ellipse(mouseX, mouseY, circle.diameter, circle.diameter);
  

  //colour.r--;colour.g--;colour.b--;
}
