var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananaGroup
var FoodGroup, obstacleGroup
var score
var ground,invisibleGround
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(500,200)
 monkey=createSprite(60,200,20,20)
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.09
  
  ground=createSprite(18,200,900,20)
  ground.velocityX=-4
  ground.x = ground.width /2;
  console.log(ground.x)
  
  invisibleGround=createSprite(400,390,20,20)
  invisibleGround.visible=false
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}
function draw() {
  background("white");
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;       
    }
     monkey.velocityY = monkey.velocityY + 0.8  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.collide(ground);

spawnfood()
spawnobstacles()  
  
  stroke("black")
  textSize(20)
  survivalTime=Math.round(frameCount/frameRate())
  text("survivalTime:"+survivalTime,100,50);
  
  drawSprites();
}
function spawnfood(){
  if(frameCount%80===0){
    var banana=createSprite(400,165,10,40)
    banana.y = Math.round(random(100,160));
    banana.addImage(bananaImage)
    banana.velocityX=-3
    banana.lifetime=200
    banana.scale=0.05
  }  
}
function spawnobstacles(){
   if (frameCount % 60 === 0){
   var obstacle = createSprite(400,174,10,40);
     obstacle.addImage(obstaceImage);
     obstacle.scale=0.1
   obstacle.velocityX = -6 ;
      var rand = Math.round(random(1,6));
     obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
   
   }
} 



