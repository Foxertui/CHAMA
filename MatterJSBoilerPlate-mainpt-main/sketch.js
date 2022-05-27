
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

	var circulo1 = {
    friction: 0.2
    }
    circlo = Bodies.circle(100,15,30,circulo1)
     World.add(world,circlo)
	
	
	 Engine.run(engine);
    
	 var quadrado1 = {
     isStatic:true
     
	 }
    quadrado = Bodies.rectangle(100,200,60,60,quadrado1)
    World.add(world,quadrado)
    
	circolo2 = Bodies.circle(200,15,30,quadrado1)
    World.add(world,circolo2)
    

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(circlo.position.x,circlo.position.y,30)
  rect(quadrado.position.x,quadrado.position.y,60,60)
  ellipse(circolo2.position.x,circolo2.position.y,30)
}



