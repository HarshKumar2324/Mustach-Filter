noseX=0;
noseY=0;

function preload(){
    mustache=loadImage('https://i.postimg.cc/hjpbWNHy/Mustache.png'); 
}

function setup(){
canvas=createCanvas(300, 300,);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(300,300);
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("finally the model got loaded ");
}

function gotPoses(results){ 
if(results.length>0){
console.log(results);
noseX = results[0].pose.nose.x-25;
noseY = results[0].pose.nose.y+5;
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 60, 30 );
    }

function take_snapshot(){
save('mustashImg.png');
}


