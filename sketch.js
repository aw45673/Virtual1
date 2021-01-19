var dog,happyDog,dogs,foodS,foodStock;
var database

function preload()
{
dog=loadImage("images/dogImg.png")
happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1500,800);
  database=firebase.database()
  dogs=createSprite(800,400)
  dogs.addImage(dog)
  dogs.scale=0.2;

   foodStock=database.ref('food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)

if (keyWentDown("UP_ARROW")){
  writeStock(foodS);
  dogs.addImage(happyDog)
}

drawSprites();

textSize(15)
fill("white")
stroke(2)
text("Press UP_ARROW Key To Feed Drago Milk!",650,100)

text("Food Remaining: "+foodS,720,300)

  

}

function readStock(data){
  foodS=data.val()
}

function writeStock(x){
  if (x<=0){
    x=0;
  }
  else {
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}


