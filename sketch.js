var movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
 
  movingRect = createSprite(600, 400,30,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(200, 750, 100, 30);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(400,750, 100, 30);
  gameObject2.shapeColor = "blue";
  gameObject3 = createSprite(600, 750, 100, 30);
  gameObject3.shapeColor = "orange";
  gameObject4 = createSprite(800, 750, 100, 30);
  gameObject4.shapeColor = "red";
}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "yellow";
    gameObject1.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "blue";
  }
  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "yellow";
    gameObject3.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "orange";
  }
  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "yellow";
    gameObject4.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "red";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}

