var newWidth = 50;
var newHeight = 50;
var colors;
var colours;
//setup function executes once
function setup(){
    createCanvas(600,400);
    background(150);
}

// draw function loops forever
function draw(){
    //background(50);
    if(mouseIsPressed){
        colors = random(0,255);
        colours = random(0,255)
        noStroke();
        fill(colors,colours,255,50);
        ellipse(mouseX,mouseY,newWidth,newHeight);
    }

}