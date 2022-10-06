
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball ;
var chao ; 
var seta;
var seta2;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Engine.run(engine);
  ball=Bodies.circle (200,200,20,ball_options);
  World.add(world,ball)

  chao=Bodies.rectangle(450,600,900,20,{
	isStatic:true 
  })
  World.add(world,chao)

  seta = Bodies.rectangle(450, 550,20,90,{
	isStatic:true 
  })
  World.add(world,seta)

  seta2 = Bodies.rectangle (550,550,20,90,{
	istatic:true 
  })
  World.add(world,seta2)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  fill ('yellow')
  drawSprites();
  rect(chao.position.x ,chao.position.y,900,10)
  rect(seta.position.x,seta.position.y,20,90)
  rect(seta2.position.x,seta2.position.y,20,90)
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed (){
	if (keyCode===32){
		Matter.Body.applyForce(ball,{
			x:0,y:0
		},{

			x:5,y: -15     
		})
		console.log("A")
	}
}

