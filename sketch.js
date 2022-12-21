var barco, mar, imgMAR, imgBarco;

function preload(){
 imgMAR = loadImage("sea.png");
 imgBarco = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
  mar = createSprite(400,150);
  mar.addImage(imgMAR);
  mar.scale = 0.3
  mar.velocityX = -3

  barco = createSprite(200,150,30,30)
  barco.addAnimation("barcoAnimacao",imgBarco);
  barco.scale = 0.3
}

function draw() {
  background("blue");
    drawSprites();

 if(mar.x < 0){
 mar.x = width/2;

 }
}
