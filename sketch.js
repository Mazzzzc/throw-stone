
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,ground,tree,boy,boyImage,line1;

var mang1,mang2,mang3,mang4,mang5;

function preload(){
	boyImage=loadImage("Plucking mangoes/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy=createSprite(100,615,50,10);
	boy.addImage(boyImage);
	boy.scale=0.1;

	stone=new Stone(100,300,70,70);

	tree=new Tree(800,300,120,90);

	ground=new Ground(400,692,800,15);

	mang1=new Mango(4800,2000,32);
	mang2=new Mango(4000,2400,32);
	mang3=new Mango(5500,1200,32);
	mang4=new Mango(5600,2150,32);
	mang5=new Mango(6200,2400,32);

	line1=new ConstraintBody(stone.body,{x:50, y:555});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();

  tree.display();

  mang1.display();
  mang2.display();
  mang3.display();
  mang4.display();
  mang5.display();

  stone.display();

  line1.display();

  detectCollision(stone,mang1);
  detectCollision(stone,mang2);
  detectCollision(stone,mang3);
  detectCollision(stone,mang4);
  detectCollision(stone,mang5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})    
}

function mouseReleased(){
    line1.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=lmango.r+lstone.r)
		{
			Matter.Body.setStatic(lmango.body,false);
		}
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
        line1.attach(stone.body);
    }
}



