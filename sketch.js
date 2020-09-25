var canvas;
function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
