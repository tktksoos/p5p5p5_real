let site_x = 200;
let site_y = 200;
let speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  site_x = width / 2;
  site_y = height / 2;
  background(255);
}

function draw() {
  background(220);

  if (keyIsDown(65)) { // A
    site_x -= speed;
  }
  if (keyIsDown(68)) { // D
    site_x += speed;
  }
  if (keyIsDown(87)) { // W
    site_y -= speed;
  }
  if (keyIsDown(83)) { // S
    site_y += speed;
  }

  ellipse(site_x, site_y, 50, 50);
}