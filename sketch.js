var bullet,wall ; 
var thickness,speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);



  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

 bullet =  createSprite(50,200,20,10);
 bullet.shapeColor = color("yellow");
 
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color ("grey");
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width ; 
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ; 
  }
return false ; 
}

function draw() {
  background(80,80,80); 
  bullet.velocityX = speed ;  

if(hasCollided(bullet,wall)) {

  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

if(damage>10) {
  wall.shapeColor = color("green");
}
if(damage<10) { 
  wall.shapeColor = color("red");
}

}

drawSprites();
}