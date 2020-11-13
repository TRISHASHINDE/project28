
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneObj=new stone(235,420,30)

	Engine.run(engine);
  
}
function detectollision(stone,mango){
	mangoBodyPosition=mango.body.mangoBodyPosition
	stoneBodyPosition=stone,body.mangoBodyPosition

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r,stone.r)
{
	Matter.Body.setStatic(mango.body,false);

}
}

function keyPressed(){
if (keyCode === 32){
	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject.attach(stoneObj.body);
}

detectollision(stoneObj,mango1);
detectollision(stoneObj,mango2);
detectollision(stoneObj,mango3);
detectollision(stoneObj,mango4);
detectollision(stoneObj,mango5);

  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function display(){
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
}



