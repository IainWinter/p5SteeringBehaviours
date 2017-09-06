function Physical(x, y, r) {
  this.position = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.velocity = createVector()
  this.acceleration = createVector();
  this.radius = r;
  this.maxSpeed = 10;
  this.maxForce = 3;
}

Physical.prototype.update = function () {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Physical.prototype.flee = function(target) {
  var disired = this.disiredVector(target);
  var mag = disired.mag();
  if(mag < 200) {
    this.applySteering(disired);
  }
}

Physical.prototype.seek = function (target) {
  var disired = this.disiredVector(target);
  disired.setMag(this.maxSpeed);

  this.applySteering(disired);
};

Physical.prototype.arrive = function () {
  var disired = this.disiredVector(this.target);
  var mag = disired.mag();
  if(mag < 200) {
    var speed = map(mag, 0, 200, 0, this.maxSpeed);
    disired.setMag(speed);
  } else {
    disired.setMag(this.maxSpeed);
  }

  this.applySteering(disired);
};

Physical.prototype.disiredVector = function(target) {
  return p5.Vector.sub(target, this.position);
}

Physical.prototype.applySteering = function (disired) {
    var steering = disired.sub(this.velocity);
    steering.limit(this.maxForce);

    this.applyForce(steering);
};

Physical.prototype.applyForce = function (f) {
  this.acceleration.add(f);
};

Physical.prototype.draw = function () {
  ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
};
