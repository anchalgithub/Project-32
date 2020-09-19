const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var bg = "images/lightjpg";

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground1 = new Ground(600,height,1200,20)
  ground2 = new Ground(600,height,1200,20)
  
  //level 1
  block1 = new Box (300,275,89,30,40)
  block2 = new Box (330,275,30,40)
  block3 = new Box (360,275,30,40)
  block4 = new Box (390,275,30,40)
  block5 = new Box (420,275,30,40)
  block6 = new Box (450,275,30,40)
  block7 = new Box (480,275,30,40)

  //level 2
  block8 = new Box (330,235,30,40);
  block9 = new Box (360,235,30,40);
  block10 = new Box (390,235,30,40);
  block11 = new Box (420,235,30,40);
  block12 = new Box (450,235,30,40);

  //level 3
  block13 = new Box (360,195,30,40);
  block14 = new Box (390,195,30,40);
  block15 = new Box (420,195,30,40);

  //the top
  block16 = new Box(390,155,30,40);

  //Second tower
  //first level
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //the top
  blocks9 = new Block(700,95,30,40);

//the stands
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);


polygon = new Box(43,50,30,40);
polygon = Bodies.circle(50,200,20);
imageMode (CENTER)
image(polygon_img,polygon.position.x, polygon.positiony,40,40)
World.add(world,polygon)


slingshot = new Slingshot(this.polygon,{x:100,y:200})

text ("SCORE:" + score,750,40);

}

function draw() {
  background(255,255,255);  

   ground1.display ();
   groun2.display ();
   stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");

  //first tower
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  slingshot.display();

  //second tower
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");

imageMode (CENTER)
image(polygon_img,polygon.position.x, polygon.positiony,40,40)

blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();
blocks10.score();
blocks11.score();
blocks12.score();
blocks13.score();
blocks14.score();
blocks15.score();
blocks16.score();

blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();




drawSprites();


}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

//32 is a binary number used in programming. 32 stand for the space key.
function keyPressed(){
if (keyCode === 32){
slingshot.attach(this.polygon);
}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,12);
  
  if(hour>=06&& hour<=18){
      bg = "images/light.jpg";
  }
  else{
      bg = "images/dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}