var name = "Iain";
var font;
var fontScale = 1000;
var fontSizeDown = 1;
var physicals = [];

function preload() {
  font = loadFont('fira.ttf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var points = font.textToPoints(name, 0, 0, fontScale);

  for (var i = 0; i < points.length; i++) {
    var scaleX = points[i].x / fontSizeDown;
    var scaleY = points[i].y / fontSizeDown + height / 1.2;
    physicals.push(new Physical(scaleX, scaleY, 3));
  }
}

function draw() {
  background(35, 35, 50);
  fill(255);
  noStroke();

  for (var i = 0; i < physicals.length; i++) {
    physicals[i].arrive();
    physicals[i].flee(createVector(mouseX, mouseY));
    physicals[i].update();
    physicals[i].draw();
  }
}
