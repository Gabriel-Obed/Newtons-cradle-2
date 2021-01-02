
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);
		
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here
	bob1 = new Pendulum(width/2, height/2, "black");
	bob2 = new Pendulum(width/2+60, height/2, "black");
	bob3 = new Pendulum(width/2+120, height/2, "black");
	bob4 = new Pendulum(width/2-60, height/2, "black");
	bob5 = new Pendulum(width/2-120, height/2, "black");

	rope1 = new Chain(bob1.body, {x: width/2, y: height/2-210});
	rope2 = new Chain(bob2.body, {x: width/2+60, y: height/2-210});
	rope3 = new Chain(bob3.body, {x: width/2+120, y: height/2-210});
	rope4 = new Chain(bob4.body, {x: width/2-60, y: height/2-210});
	rope5 = new Chain(bob5.body, {x: width/2-120, y: height/2-210});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob3.body, {x: mouseX, y: mouseY})
}