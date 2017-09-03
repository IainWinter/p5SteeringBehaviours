var name = "Iain";
var font;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  font = loadFont('Arial.ttf');
}

function draw() {
  background(35, 35, 50);
  textSize(100);
  textFont(font);
  text(name, width / 2 - textWidth(name) / 2, height / 2 + 50);

  var points = font.textToPoints(name, 100, 100);
  console.log(points);
}
