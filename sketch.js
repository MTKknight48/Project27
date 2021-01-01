
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  roof = new Roof(375,250,300,20);
	  bobObject1 = new Bob(375,450);
	  bobObject2 = new Bob(320,450);
	  bobObject3 = new Bob(430,450);
	  bobObject4 = new Bob(650,150);
	  bobObject5 = new Bob(265,450);
	  rope1 = new Rope(bobObject1.body,roof.body,0,0);
	  rope2 = new Rope(bobObject2.body,roof.body,-55,0);
	  rope3 = new Rope(bobObject3.body,roof.body,55,0);
	  rope4 = new Rope(bobObject4.body,roof.body,110,0);
	  rope5 = new Rope(bobObject5.body,roof.body,-110,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


}



