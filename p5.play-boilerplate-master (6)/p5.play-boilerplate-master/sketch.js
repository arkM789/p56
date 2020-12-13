var car,wall;
var speed,weight;


function setup(){
  createCanvas(800,400);

  speed=random(60,10);

  weight=random(400,1500);

  car=createSprite(600, 70, 60, 20);

  wall=createSprite(800,34,80,400);
wall.shapeColor="black";
  car.velocityX=speed;


  
}

function draw() {
  background(1500,800);  



  if(car.isTouching(wall)){

    car.velocityX=0;
  }
  if(car.isTouching(wall)){

  car.shapeColor="red";
 }



  drawSprites();
}