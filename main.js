function preload(){
img=loadImage('dog_cat.jpg');

}
function draw(){
image(img,0,0,600,400);
/*fill("orange" );
text("dog",150,100);
noFill();
stroke("black");

rect(150,100,300,250);
fill("red" );
text("cat",325,100);
noFill();
stroke("orange");

rect(300,100,250,250);*/
if(status != ""){
    for(counter=0; counter < objects.legnth; couner++){
        document.getElementById("status").innerHTML = "status:objects detected";
        fill("orange");
        percent = floor(objects[counter].confidence*100);
        text(objects[counter].label+" "+percent+"%",objects[counter].x,objects[counter].y);
        noFill();
        stroke("black");
        rect(objects[counter].x,objects[counter].y,objects[counter].width,objects[counter].height);  
    }
}
}
function setup(){
 canvas= createCanvas(600,400);
 canvas.center();
 objectdetector = ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML = "status: dectecting objects"
}
img = "";
status = "";
objects=[];
function modelLoaded(){
    console.log("model loaded");
  status = true;
  objectdetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error==true){
        console.log(error);
    }
    
        console.log(results);
    objects=results;
}