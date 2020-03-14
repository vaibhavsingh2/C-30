const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var slinshoot;
var gameState = "onSling";

function preload(){
    enemy1=loadImage("sprites/enemy.png")

}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':3.0
    }
    t1=new Box(300,370,20,20);
     t2=new Box(278,370,20,20);
     t3=new Box(256,370,20,20);
     t4=new Box(234,370,20,20);
     t5=new Box(322,370,20,20);
     t6=new Box(311,348,20,20);
     t7=new Box(289,348,20,20);
     t8=new Box(267,348,20,20);
     t9=new Box(245,348,20,20);
     t10=new Box(256,326,20,20);
     t11=new Box(278,326,20,20);
     t12=new Box(300,326,20,20);
     t13=new Box(280,304,20,20);
    t14=new Box(248,180,20,20);
    t15=new Box(270,180,20,20);
    t16=new Box(292,180,20,20);
    t17=new Box(256,158,20,20);
   t18=new Box(278,158,20,20);
   t19=new Box(267,136,20,20);
  // t20=createSprite(110,230,25,25);
     var ground_options ={
        isStatic: true
    } 
    bird=new Bird(110,230);
    BIRD=new Bird(140,260);
    slinshoot=new SlingShot(BIRD.body,{x:110, y:230})
        
    ground = new Ground(600,height,1200,20);
    World.add(world,ground);
    ground1=Bodies.rectangle(270,200,90,20,ground_options);
    World.add(world,ground1);
    console.log(ground);
   
}



function draw(){
    background("white");
    rectMode(CENTER);
    
    Engine.update(engine);
    rectMode(CENTER);
  //  rect(ground.position.x,ground.position.y,400,20);
  ground.display();  
  rect(ground1.position.x,ground1.position.y,90,20);
    t1.display();
    t2.display();
    t3.display();
    t4.display();
    t5.display();
    t6.display();
    t7.display();
    t8.display();
    t9.display();
    t10.display();
    t11.display();
    t12.display();
    t13.display();
    t14.display();
    t15.display();
    t16.display();
    t17.display();
    t18.display();
    t19.display();






    BIRD.display();
    slinshoot.display();

    drawSprites();
}

function mouseDragged(){
   
    Matter.Body.setPosition(BIRD.body, {x: mouseX , y: mouseY});
   
}




function mouseReleased(){
    
    slinshoot.fly();
//    gameState="launched";
}

function keyPressed(){
if(keyCode===32){
   BIRD.image=loadImage("sprites/enemy.png");
}

if(keyCode===27){
    BIRD.image=loadImage("sprites/bird.png");
}


}












