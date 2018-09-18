//At the time of writing this I haven't got any other files for other functionality but
//I plan to add more files later down the line but for now, I'm going to focus on this one.
//Please don't edit stuff in here unless you know what you are doing, changes could break
//functionality.

//Rohan Dewan

console.log("RD.js Library made by Rohan Dewan");

var canvas;
var ctx;
var objects = [];
var drawRate = 1;

setInterval(draw,drawRate);

addEventListener("mousemove",function(event){
  mousePoint.x = event.clientX;
  mousePoint.y = event.clientY;
});

class Point {
  constructor(x,y) {
    this.x = x || 0;
    this.y = y || 0;
  }
  static updateXY(x,y) {
    this.x = x;
    this.y = y;
  }
  static updatePoint(a) {
    this.x = a.x;
    this.y = a.y;
  }
  static distance(a,b) {
    return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
  }
  static midPoint(a,b) {
    return new Point((a.x+b.x)/2,(a.y+b.y)/2);
  }
}

class Circle {
  constructor(Center,r,c,sf) {
    this.center = Center || new Point(0,0);
    this.radius = r || 10;
    this.colour = c || "black";
    this.sf = sf || "fill";
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
  update(start,end) {
    this.start = start;
    this.end = end;
  }
}

class Rect {
  constructor(Start,Width,Height,Colour,sf) {
    this.start = Start || new Point(0,0);
    this.width = Width || 0;
    this.height = Height || 0;
    this.colour = Colour || "white";
    this.sf = sf || "fill";
    objects.push(this);
  }
  draw() {
    drawRect(this);
  }
}

class Text {
  constructor(string,center,colour) {
    this.string = string || "Hello World!";
    this.center = center || new Point(0,0);
    this.colour = colour || "black";
    objects.push(this);
  }
  draw() {
    drawText(this);
  }
}

class Pair {
  constructor(a,b) {
    if(a > b) {
      this.a = a;
      this.b = b;
    }else {
      this.a = b;
      this.b = a;
    }
  }
}

var mousePoint = new Point();

function setFont(size,serif) {
  ctx.font = size.toString() + "px " + serif.toString();
}

function canvasCheck() {
  if(document.getElementById("canvas") == null) {
    console.log("No canvas with 'canvas' id. Creating one.")
    canvas = document.createElement("canvas");
    canvas.id = "canvas";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
  } else {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
  }
}

function canvasSize(width,height) {
  canvas.width = width;
  canvas.height = height;
}

function drawCircle(circle) {
  ctx.fillStyle = circle.colour;
  ctx.strokeStyle = circle.colour;
  ctx.beginPath();
  ctx.arc(circle.center.x,circle.center.y,circle.radius,0,Math.PI*2);
  if(circle.sf == "fill") {
    ctx.fill();
  }else if (circle.sf == "stroke") {
    ctx.stroke();
  }
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
  ctx.strokeStyle = rect.colour;
  if(rect.sf == "fill") {
    ctx.fillRect(rect.start.x,rect.start.y,rect.width,rect.height);
  }else if (rect.sf == "stroke") {
    ctx.strokeRect(rect.start.x,rect.start.y,rect.width,rect.height);
  }
}

function drawText(text) {
  ctx.fillStyle = text.colour;
  ctx.fillText(text.string,text.center.x,text.center.y);
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

function RGBStr(r,g,b) {
  return "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
}

function RGBAStr(r,g,b,a) {
  return "rgba(" + r.toString() + "," + g.toString() + "," + b.toString() + "," + a.toString() + ")";
}

function nCr(n,r) {
  var top = 1;
  var bot = 1;
  for(var i=0; i != r; i++) {
    top *= (n-i);
  }
  for(var i=1; i !=r+1; i++) {
    bot *= i;
  }
  return top/bot;
}