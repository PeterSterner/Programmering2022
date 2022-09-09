let x, y, d, a, b;

let x1, y1, d1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = 50;
  y = 50;
  d = 40;
  a = 5;
  b = 0;

  x1 = windowWidth - 50;
  y1 = windowHeight - 50;
  d1 = 40;
}

function draw() {
  background(220);
  fill("white");
  circle(x, y, d);
  fill("red");
  circle(x1, y1, d1);

  x = x + a;
  y = y + b;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    a = -5;
    b = 0;
  }

  if (keyCode === RIGHT_ARROW) {
    a = 5;
    b = 0;
  }

  if (keyCode === UP_ARROW) {
    b = -5;
    a = 0;
  }

  if (keyCode === DOWN_ARROW) {
    b = 5;
    a = 0;
  }

  if (keyCode === 83) {
    // vi har trykket på s
    b = 0;
    a = 0;
  }
}
