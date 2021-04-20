var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  fill(255);
  textSize(30);
  text("SCORE: "+score, 800, 100);

  if(score===3){
    clear();
    background(bg2);
    fill("red");
    textSize(40);
    text("TREASURE UNLOCKED", 350,250);
  } 
  
  
  

  drawSprites()
}