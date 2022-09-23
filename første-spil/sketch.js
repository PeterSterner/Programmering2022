let x1 = 50,
  y1 = 50,
  d1 = 40,
  a1 = 5,
  b1 = 0,
  farve1 = "blue";

let x2 = 50,
  y2 = 50,
  d2 = 40,
  a2 = 0,
  b2 = 5,
  farve2 = "green";

let mål_x,
  mål_y,
  mål_d,
  mål_farve = "red";

function setup() {
  createCanvas(windowWidth, windowHeight);
  mål_x = windowWidth - 50;
  mål_y = windowHeight - 50;
  mål_d = 40;
}

function draw() {
  background(220);
  fill(farve1);
  circle(x1, y1, d1);

  fill(farve2);
  circle(x2, y2, d2);

  fill(mål_farve);
  circle(mål_x, mål_y, mål_d);

  x1 = x1 + a1;
  y1 = y1 + b1;

  x2 = x2 + a2;
  y2 = y2 + b2;

  let resultat = beregnAfstand(x1, y1);

  if (resultat < d1 / 2 + mål_d / 2) {
    vinderFundet("Spiller 1", farve1);
  }

  resultat = beregnAfstand(x2, y2);

  if (resultat < d2 / 2 + mål_d / 2) {
    vinderFundet("Spiller 2", farve2);
  }
}

function beregnAfstand(x, y) {
  return sqrt(pow(x - mål_x, 2) + pow(y - mål_y, 2));
}

function vinderFundet(spiller, farve) {
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(farve);
  text(spiller + " har vundet!", windowWidth / 2, windowHeight / 2);
  noLoop();
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    a1 = 0;
    b1 = 5;
  } else if (keyCode === UP_ARROW) {
    a1 = 0;
    b1 = -5;
  } else if (keyCode === LEFT_ARROW) {
    a1 = -5;
    b1 = 0;
  } else if (keyCode === RIGHT_ARROW) {
    a1 = 5;
    b1 = 0;
  }

  if (keyCode === 83) {
    // s
    a2 = 0;
    b2 = 5;
  }
  if (keyCode === 87) {
    a2 = 0;
    b2 = -5;
  }
  if (keyCode === 65) {
    //
    a2 = -5;
    b2 = 0;
  }
  if (keyCode === 68) {
    // d
    a2 = 5;
    b2 = 0;
  }

  if (keyCode === 32) {
    a1 = 0;
    b1 = 0;
    a2 = 0;
    b2 = 0;
  }
}
