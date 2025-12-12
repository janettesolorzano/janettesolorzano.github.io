var ballx = 600;
var bally = 600;
var ballSize = 80;
var score =0;
var gameState= "L1";

function preload (){
spaceCow=loadImage('https://janettesolorzano.github.io/p5.js/Ball_Case_Game.js/spaceCow.png'); 
}
 
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(152,245,249);
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  
  text(("Score: " + score), width/2, 40);
  

} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
 image (spaceCow,ballx-40, bally-40, ballSize, ballSize);
 line(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(244,206,255);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>10){
// lvel 3
   gameState = "L3";

  }
  
 
    
//  line(ballx, bally, mouseX, mouseY);
image (spaceCow,ballx-40, bally-40, ballSize, ballSize);
} // end level two

function levelThree(){
    background(172,250,141);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
 
  }
    

  if(score>15){
// lvel 4
//   gameState = "L4";
 
 text("game over!", width/2, height/2);
textSize(blockHeight);
text("press screen to start a new game!", width/2, height 
*3/4);  

  }
  //  line(ballx, bally, mouseX, mouseY);
image (spaceCow,ballx-40, bally-40, ballSize, ballSize);
} // end level thre
   text("game over!", width/10, height/10);
text("try again!", width/10, height/10);
