const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block1, block2, block3;

function preload(){
	
}

function setup(){
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var plane_options = {
    isStatic: true
  }

  var block1_options = {
	restitution: 0.98,
	frictionAir: 0.05
  }

  var block2_options = {
	restitution: 0.37,
	frictionAir: 0.01
  }

  var block3_options = {
	restitution: 0.69,
	frictionAir: 0.03
  }

  plane = Bodies.rectangle(200, 400, 400, 1, plane_options);
  World.add(world, plane);

  block1 = Bodies.rectangle(70, 70, 40, 40, block1_options);
  World.add(world, block1);

  block2 = Bodies.circle(200, 50, 20, block2_options);
  World.add(world, block2);

  block3 = Bodies.rectangle(280, 100, 90, 40, block3_options);
  World.add(world, block3);
  
  fill(85,107,47);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //Engine.run(engine); -> não sei pra que isso 
}


function draw(){
  //rectMode(CENTER); -> não sei se deveria estar na draw(), então copiei e colei na setup()

  background(192);
  Engine.update(engine);
  
  rect(plane.position.x, plane.position.y, 400, 1);
  rect(block1.position.x, block1.position.y, 40, 40);
  ellipse(block2.position.x, block2.position.y, 20);
  rect(block3.position.x, block3.position.y, 90, 40)
  
  drawSprites();
}

/*
dúvidas: 

-> qual a diferença do diferença do engine.run pro engine.uptade?
-> para que tem o drawSprites() se não tem sprites?
-> no script do projeto diz pra criar um corpo plano. 
tem um nome especifico para corpo plano ou eu crio um retangulo mesmo?
 */

