let x = 50;
let y = 100;
let d = 20;
let a = 10;
let b = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("red");
  fill("blue");
  circle(x, y, d);
  x = x + a;
  y = y + b;

  if (x >= windowWidth || x <= 0) {
    a = -a;
  }

  if (y >= windowHeight || y <= 0) {
    b = -b;
  }
}
