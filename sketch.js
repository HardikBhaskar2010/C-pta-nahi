var space, spaceimg;
var rocket, rocketimg;
var asteroid, asteroidimg, asteroidsGroup;
var star, starimg, starsGroup;
var invisible, invisibleGroup
var Play =1;
var End =0;
var gameState = Play;
var score = 0;

function preload(){
spaceimg = loadImage("bg.jpg");
rocketimg = loadImage("rocket.png");
asteroidimg = loadImage("asteroid.png");
starimg = loadImage("star.png")
space_sound = loadSound("sound.mp3")


}

function setup() {
 createCanvas(windowWidth,windowHeight);
 //console.log(windowHeight)
 space = createSprite(300,300);
 space_sound.loop()
 space.addImage("space",spaceimg);
 space.velocityY = 4;

 
 

 rocket = createSprite(width/2,height/1.5,50,50)
 rocket.scale = 0.5;
 rocket.setCollider("rectangle",0,0,130,255);
 
 
 
 rocket.addImage("rocket",rocketimg)

 asteroidsGroup = new Group();
 starsGroup = new Group()
 invisibleGroup = new Group();
}

function draw() {
 background(255);

  drawSprites()
if(gameState === Play){
   textSize(20);
   fill(255);
   text("Score: "+ score,900,30);

    if(keyDown("right_arrow")){
    rocket.x = rocket.x + 5;
 }
 if(keyDown("left_arrow")){
    rocket.x = rocket.x - 5;
 }
spawn_Asteroid()
spawnstars()
 if(space.y > 500){
    space.y = 250
  }
  if(asteroidsGroup.isTouching(rocket)){
   space.velocityY = 0
   rocket.destroy()
   asteroidsGroup.destroyEach();
   starsGroup.destroyEach();
   gameState = "End"
}
if(starsGroup.isTouching(rocket)){
   score = score +1
   star.destroy()
}

}
if(gameState === End){
   
   stroke("yellow");
   fill("yellow");
   textSize(30);
   text("Game Over",208,640)

}
}

function spawn_Asteroid(){
    
    if (frameCount % 340 === 0){
     var asteroid = createSprite(400,50)
    asteroid.scale = 0.2;
   
    
    
   
    
    
    asteroid.velocityY = 4
    //asteroid.x = Math.round(random(height,width));
    asteroid.x = Math.round(random(10,1280));
    
    asteroid.addImage("aster",asteroidimg)
    //rocket.depth = asteroid.depth;
    //rocket.depth +=1;
    
   
    asteroidsGroup.add(asteroid)
    }
}
function spawnstars(){
   if (frameCount % 250 === 0){
   star = createSprite(200,50)
   star.scale = 0.1
   starsGroup.add(star)
   star.depth = rocket.depth;
   

   star.setCollider("rectangle",0,0,50,50);
   star.addImage("star",starimg)
   //rocket.depth = star.depth
   
   star.velocityY = 5;
   star.x = Math.round(random(10,1280));
   
   
}
}
