let x = 50,
  y = 50,
  d = 40,
  a = 5,
  b = 0;
let x1, y1, d1;

function setup() {
  createCanvas(windowWidth, windowHeight);
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

  let resultat = beregnAfstand();

  if (resultat < d / 2 + d1 / 2 - 30) {
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Du har vundet!", windowWidth / 2, windowHeight / 2);
    noLoop();
  }
}

function beregnAfstand() {
  return sqrt(pow(x - x1, 2) + pow(y - y1, 2));
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    a = 0;
    b = 5;
  }
  if (keyCode === UP_ARROW) {
    a = 0;
    b = -5;
  }
  if (keyCode === LEFT_ARROW) {
    a = -5;
    b = 0;
  }
  if (keyCode === RIGHT_ARROW) {
    a = 5;
    b = 0;
  }
  if (keyCode === 83) {
    a = 0;
    b = 0;
  }
}
