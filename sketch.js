const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg,hour ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    console.log(hour)
    textSize(30)
    if(hour>=12){
        text("Time:"+hour%12+"PM",100,50)
    }
    else if(hour == 0){
        text("Time: 12 AM",100,50)
    }
    else{
        text("Time:"+hour%12+"AM",100,50)
    }
    


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Europe/London")
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=4 && hour<=06){
        bg = "sunrise1.png"
    }
    else if(hour>=6 && hour<=08){
        bg = "sunrise2.png"
    }
    else if(hour>=8 && hour<=17){
        bg = "sunrise5.png"
    } 
    else if(hour>=17 && hour<=23){
        bg = "sunset8.png"
    }
    else if(hour>=23 && hour<=0){
        bg = "sunset10.png"
    }
    else if(hour>=0 && hour<=04){
        bg = "sunset11.png"
    }
    else{
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg);
    
    
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
