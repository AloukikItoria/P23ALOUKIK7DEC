var ground;
var helicopter,helicopterImage;
var supply,supplyImage;
var bl1,bl2,bl3

function preload(){

	helicopterImage = loadImage("helicopter.png")
    supplyImage = loadImage("package.png")


}

function setup(){
createCanvas(500,400);

ground = createSprite(200,380,700,10);
helicopter = createSprite(230,60,50,50);
helicopter.addImage("image1",helicopterImage)
helicopter.scale = (0.5)
supply = createSprite(220,350,50,50);
supply.addImage("image2",supplyImage)
supply.scale = (0.2)
bl1 = createSprite(180,335,10,80);
bl2 = createSprite(265,335,10,80);
bl3 = createSprite(222,380,96,10);
bl3.shapeColor = ("red")
bl2.shapeColor = ("red")
bl1.shapeColor = ("red")
ground.shapeColor = ("white")


}




function draw(){
background("black")
imageMode(CENTER)

drawSprites();



}