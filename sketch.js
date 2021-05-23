const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var time = 0;

var bg ;

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
       noStroke();
       textSize(30);
       fill("white")
       text("Time " + time, width-300, 50)

}

async function getBackgroundImg(){
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
        console.log(response);
        
        var JSONresponse = await response.json()
        console.log(JSONresponse);
        
        var DT = JSONresponse.datetime;
        console.log(DT);
        
        var hour = DT.slice(11, 13);
        console.log(hour);
        var bg
        if(hour>= 04 && hour<= 06){
        bg = "sprites/sunrise1.png";
        }
        else if(hour>= 06 && hour<= 08)
        {
        bg = "sprites/sunrise2.png";
        }
        else if(hour>= 08 && hour<= 10)
        {
        bg = "sprites/sunrise3.png";
        }
        else if(hour>= 10 && hour<= 12)
        {
        bg = "sprites/sunrise4.png";
        }
        else if(hour>= 12 && hour<= 14)
        {
        bg = "sprites/sunrise5.png";
        }
        else if(hour>= 14 && hour<= 16)
        {
        bg = "sprites/sunrise6.png";
        }
        else if(hour>= 16 && hour<= 18)
        {
        bg = "sprites/sunset7.png";
        }
        else if(hour>= 18 && hour<= 20)
        {
        bg = "sprites/sunset8.png";
        }
        else if(hour>= 20 && hour<= 22)
        {
        bg = "sprites/sunsete9.png";
        }
         else if(hour>= 23 && hour==0)
        {
        bg = "sprites/sunset10.png";
        } 
        else if(hour==0  && hour<=03)
        {
        bg = "sprites/sunsete11.png";
        }
        else
        {
        bg = "sprites/sunset12.png";
        }
        backgroundImg = loadImage(bg);
        }
    // write code to fetch time from API

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

