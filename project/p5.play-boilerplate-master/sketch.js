var car,wall;
var speed1,speed2,speed3,weight;

var Zynia,Tourus,Cyclap;

function setup() {
  createCanvas(1000,400);
  wall = createSprite(790,200,50,300);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(100,200,40,40);
  car.velocityX = (speed);
}

function draw() {
  background(0);
  
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0
    var deformation =0.5 *weight *speed *speed/22509;
    if(deformation < 100){
      car.shapeColor =(0,255,0)
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor =(230,230,0)
    }

    if(deformation > 180){
      car.shapeColor =(255,0,0)
    }

    else{
      car.shapeColor =(255,255,255)
    }
  }
  
  drawSprites();
}