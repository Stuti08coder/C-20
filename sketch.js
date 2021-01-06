var movingrect;
var fixrect;





function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 60, 60);

  fixrect = createSprite(300,300,60,60)
}

function draw() {
  background("pink");  
 
 movingrect.y = World.mouseY
 movingrect.x = World.mouseX
 
 console.log(movingrect.x - fixrect.x)
 console.log(fixrect.width/2+movingrect.width/2)
 
if(movingrect.x - fixrect.x < fixrect.width/2+movingrect.width/2 && fixrect.x - movingrect.x < fixrect.width/2+movingrect.width/2 && 
  movingrect.y - fixrect.y < fixrect.width/2+movingrect.width/2 && fixrect.y - movingrect.y < fixrect.width/2+movingrect.width/2  ){
  movingrect.shapeColor = "red"
 fixrect.shapeColor = "red"
}
 else{

 movingrect.shapeColor = "green"
 fixrect.shapeColor = "green"
 }










  drawSprites();
}