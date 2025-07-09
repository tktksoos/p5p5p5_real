function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // 真っ白な背景
  stroke(0); // 黒い線

  // スクロール防止（iOS対応）
  let canvas = document.querySelector("canvas");
  canvas.addEventListener("touchstart", (e) => e.preventDefault());
  canvas.addEventListener("touchmove", (e) => e.preventDefault());
  canvas.addEventListener("touchend", (e) => e.preventDefault());
}

function touchMoved() {
  //line(pmouseX, pmouseY, mouseX, mouseY);
  return false; // スクロール防止
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, mouseX, mouseY);
}
