console.log("RD.js loaded.");

objects = [];

setInterval(draw,60);

class Circle {
  constructor(x,y,r,c) {
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 10;
    this.c = c || "black";
    objects.push(this);
  }
  draw(){
    drawCircle(this);
  }
}

function canvasSize(width,height) {
  canvas.width = width;
  canvas.height = height;
}

function drawCircle(circle) {
  ctx.beginPath();
  ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2);
  ctx.fillStyle = circle.c;
  ctx.fill();
}

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clearCanvas();
  for(var i = 0; i < objects.length; i++) {
    objects[i].draw();
  }
}
