var tom, jerry, tomImg , jerryImg;
var background,backgroundImg;
function preload() {
    //load the images here
    tomImg = loadAnimation("tomOne.png,tomTwo.png,tomThree.png,tomFour.png");
    jerryImg = loadAnimation("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
    backgroundImg = loadImage("garden.png");
}

function setup(){
    createCanvas(600,400);
    //create tom and jerry sprites here
    tom =createSprite(400,200,80,30);
    
    jerry = createSprite(200,200,50,80);
    background = createSprite(200,150);
    background = addImage("backgroundImg",backgroundImg);
    background.scale =1.2;
    
}
    
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   tom.velocityX = -5;
   tom.addAnimation("tomLastImage", tomthree.png);
   tom.changeAnimation("tomLastImage"); 
   




  }

}
