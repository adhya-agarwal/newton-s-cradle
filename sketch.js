
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 500);


	engine = Engine.create();
	world = engine.world;

	roof1=new Roof(685,100,365,15)
	bob1=new Bob(560,400,60);
	bob2=new Bob(620,400,60);
	bob3=new Bob(680,400,60);
	bob4=new Bob(740,400,60);
	bob5=new Bob(800,400,60);
	rope1=new Rope(bob1.body,roof1.body,0,0);



	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope1.display();

  


  
  drawSprites();
 
}



