let x = 100;
let y = 200;
let d = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);
  circle(x, y, d);
  console.log(mouseX, mouseY);

  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    circle(mouseX, mouseY, 50);
  }
}
