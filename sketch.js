var bullet;
var wall;
var thickness;
var spped;
var weight;

function setup() {
  createCanvas(1400,400);

  speed = random(223,321)
  weight = random(30, 52);
  thickness = random(22,83);
  
  
  bullet = createSprite(400, 200, 20, 5);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "lightblue";


  
}

function draw() {
  background("black");  

bullet.collide(wall);
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {

 
   var damage = 0.5 * speed * weight * speed / thickness * thickness * thickness;
   if(damage < 10)
   {
   wall.shapeColor = "red"
   }
   if(damage >10)
   {
   wall.shapeColor = "green"
   }
 
  }
  console.log(damage);
  drawSprites();
}
