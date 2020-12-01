var dog
var happyDog
var database
var foodS
var foodStock
var fordog
var forhappydog


function preload()
{
  fordog=loadImage("dogimg.png")
  forhappydog=loadImage("dogimg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
  dog.addImage(fordog)
  dog.scale=0.5
  happyDog=createSprite(250,250,1,1)
  foodStock=firebase.database();
  foodStock.ref("Food").on("value",readStock);
  
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(forhappydog);
  }
  drawSprites();
  //text("NOTE:Press UP_ARROW key to feed",300,300)
  //mam it is showing error because of the text message what to do?
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if (x<=0) {
    x=0
  }else{
    x=x+1
  }
  foodStock.ref('/').update({
    Food:x
  })
}


