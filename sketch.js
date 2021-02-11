const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box, ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box = new Box(200,130,30,20);
    ground = new Ground(200,392);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    ground.display();
    
   
}