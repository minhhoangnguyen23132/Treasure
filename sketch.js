var path,boy,boyImg;
var pathImg;

function preload(){
//pre-load images
pathImg = loadAnimation("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");  
}

function setup(){
  
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  
  boy = createSprite(70,580,20,20);
  boy.addAnimation(boyImg)
  boy.scale=0.08

;
}

function draw() {
  background(0);
  if(path.y>400){
  path.y=height/2;
  }

  
}