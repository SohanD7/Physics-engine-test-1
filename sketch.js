const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var button1;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ground1 = new Ground(200,390,400,20);
  leftBorder = new Ground(5,200,10,400);
  topBorder = new Ground(200,5,400,10);
  rightBorder = new Ground(395,200,10,400);

  ball1 = new Ball(200,110,10);

  button1 = createImg("push.png");
  button1.position(300,300);
  button1.size(50,50);
  button1.mouseClicked(force1);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.display();
  leftBorder.display();
  topBorder.display();
  rightBorder.display();
  ball1.display();
}

function force1()
{
  Body.applyForce(ball1,{x:0,y:0},{x:0,y:-0.1});
}

