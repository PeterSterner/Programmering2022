let cirkel1;
let cirkel2;

class Cirkel {
  constructor(x, y, d, a, b) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.a = a;
    this.b = b;
  }

  draw() {
    circle(this.x, this.y, this.d);
    this.x = this.x + this.a;
    this.y = this.y + this.b;
    this.reflect();
  }

  reflect() {
    if (this.y <= 0 || this.y >= windowHeight) {
      this.b = -this.b;
    }

    if (this.x <= 0 || this.x >= windowWidth) {
      this.a = -this.a;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cirkel1 = new Cirkel(50, 100, 50, 1, 2);
  cirkel2 = new Cirkel(100, 50, 50, -1, 2);
}

function draw() {
  background(220);
  fill("red");
  stroke("black");
  cirkel1.draw();
  cirkel2.draw();
}
