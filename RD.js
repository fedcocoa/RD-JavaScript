//This file is the main RD.js Library. It contains all the basics for the Library.
//At the time of writing this I haven't got any other files for other functionality but
//I plan to add more files later down the line but for now, I'm going to focus on this one.
//Please don't edit stuff in here unless you know what you are doing, changes could break
//functionality.

//Rohan Dewan
var canvas;
var ctx;

function canvasCheck() {
  if(document.getElementById("canvas") == null) {
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
  } else {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  }
}

console.log("RD.js Library made by Rohan Dewan");

objects = [];

setInterval(draw,60);

class Point {
  constructor(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

class Circle {
  constructor(Center,r,c) {
    this.center = Center || new Point(0,0);
    this.radius = r || 10;
    this.colour = c || "white";
    objects.push(this);
  }
  draw(){
    drawCircle(this);
  }
}

class Line {
  constructor(Start,End,w,c) {
    this.start = Start || new Point(0,0);
    this.end = End || new Point(0,0);
    this.width = w || 1;
    this.colour = c || "white";
    objects.push(this);
  }
  draw() {
    drawLine(this);
  }
}

class Rect {
  constructor(Start,Width,Height,Colour) {
    this.start = Start || new Point(0,0);
    this.width = Width || 0;
    this.height = Height || 0;
    this.colour = Colour || "white";
    objects.push(this);
  }
  draw() {
    drawRect(this);
  }
}

function canvasSize(width,height) {
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

function drawRect(rect) {
  ctx.fillStyle = rect.colour;
  ctx.fillRect(rect.start.x,rect.start.y,rect.width,rect.height);
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
