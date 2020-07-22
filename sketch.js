
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof;
var string1, string2, string3, string4, string5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	

	var startBobPositionX=width/2;
	var startBobPositionY=height/4+500;
	bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bob5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);



	roof = new Roof(400, 150, 400, 20);

	string1 = new String(roof.body, bob1.body, -bobDiameter*2, 0);
	string2 = new String(roof.body, bob2.body, -bobDiameter*1,0);
	string3 = new String(roof.body, bob3.body, 0, 0);
	string4 = new String(roof.body, bob4.body, bobDiameter*1, 0);
	string5 = new String(roof.body, bob5.body, bobDiameter*2, 0);




console.log(bob1);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


   roof.display();
   string1.display();
   string2.display();
   string3.display();
   string4.display();
   string5.display();
   keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

