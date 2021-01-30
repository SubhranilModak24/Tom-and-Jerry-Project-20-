var backgroundImg;

var tom , tomImg1 , tomImg2 , tomImg3 , tomImg4 , tomAnimation , jerry , jerryImg1 , jerryImg2 , jerryImg3 , jerryImg4 , jerryAnimation;

function preload() {
    //load the images here

    backgroundImg = loadImage("garden.png")

    tomImg1 = loadImage("cat1.png")
    tomImg2 = loadImage("cat2.png")
    tomImg3 = loadImage("cat3.png")
    tomImg4 = loadAnimation("cat4.png")
    tomAnimation = loadAnimation(tomImg2,tomImg3)

    jerryImg1 = loadImage("mouse1.png")
    jerryImg2 = loadImage("mouse2.png")
    jerryImg3 = loadImage("mouse3.png")
    jerryImg4 = loadAnimation("mouse4.png")
    jerryAnimation = loadAnimation(jerryImg2,jerryImg3)
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(900,600,10,10)
    tom.addImage(tomImg1)
    tom.scale = 0.2;
    jerry = createSprite(200,600,10,10)
    jerry.addImage(jerryImg1)
    jerry.scale = 0.19;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addAnimation("tomLastImage",tomImg4);
        tom.changeAnimation("tomLastImage")
        tom.velocityX=0;
        tom.x=jerry.x+80;
        jerry.addAnimation("jerryLastImage",jerryImg4);
        jerry.changeAnimation("jerryLastImage")
        jerry.scale=0.17;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",tomAnimation);
      tom.changeAnimation("tomRunning");
      jerry.addAnimation("jerryDancing",jerryAnimation);
      jerry.changeAnimation("jerryDancing");
  }

}
