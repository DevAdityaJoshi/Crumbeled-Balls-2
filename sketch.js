
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;



	paper = new Paper(200,300,50,50);

	//rect1 = new Dustbin(200,600,200,20);
  rect2 = new Dustbin(500,600,20,200);
  rect3 = new Dustbin(700,600,20,200);
  rect4 = new Dustbin(600,690,200,20);
  ground = Bodies.rectangle(400 ,700, 800, 20, {isStatic:true})
  World.add(world, ground)
	Engine.run(engine);


}


function draw() {
  //rectMode(CENTER);
  background("white");
  paper.display();
  //rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);
  drawSprites();
  
}
function keyPressed(){
  if(keyCode = UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{y:100,x:-100})
  }
}


