//This file is the main RD.js Library. It contains all the basics for the Library.
//At the time of writing this I haven't got any other files for other functionality but
//I plan to add more files later down the line but for now, I'm going to focus on this one.
//Please don't edit stuff in here unless you know what you are doing, changes could break
//functionality.

//Rohan Dewan

console.log("RD.js Library");

objects = [];

setInterval(draw,60);

class Point {
  constructor(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

class Circle {
  constructor(x,y,r,c) {
    this.center = new Point(x,y);
    this.radius = r || 10;
    this.colour = c || "white";
    objects.push(this);
  }
  draw(){
    drawCircle(this);
  }
}

class Line {
  constructor(x1,y1,x2,y2,w,c) {
    this.start = new Point(x1 || 0,y1 || 0);
    this.end = new Point(x2 || 0, y2 || 0);
    this.width = w || 1;
    this.colour = c || "white";
    objects.push(this);
  }
  draw() {
    drawLine(this);
  }
}

function setSize(width,height) {
  canvas.width = width;
  canvas.height = height;
}

function drawCircle(circle) {
  ctx.fillStyle = circle.colour;
  ctx.beginPath();
  ctx.arc(circle.center.x,circle.center.y,circle.radius,0,Math.PI*2);
  ctx.fill();
}

function drawLine(line) {
  ctx.lineWidth = line.width;
  ctx.strokeStyle = line.colour;
  ctx.beginPath();
  ctx.moveTo(line.start.x,line.start.y);
  ctx.lineTo(line.end.x,line.end.y);
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clearCanvas();
  drawObjects();
}

function drawObjects() {
  for(var i = 0; i < objects.length; i++) {
    objects[i].draw();
  }
}
