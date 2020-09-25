
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
var paper1, ground1, dustbin;
var world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  paper1 = new Paper(200,490,70);
  ground1 = new Ground(width/2,670,width,20);
  dustbin= new Dustbin(1200,650);

  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

  Engine.run(engine);
	 
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(180);
  paper1.display();
  ground1.display();
  dustbin.display();
  drawSprites();
 
}



