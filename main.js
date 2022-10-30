difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,160);
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log("Posenet has been initialised")
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist X = " + leftWristX);
    console.log("Right Wrist X = " + rightWristX);
    console.log("Difference = " + difference);
}
}

function draw(){
    background("#ea1e1e")
    document.getElementById("font_size").innerHTML = "Font Size of the Text will be = " + difference + "px";
    textSize(difference);
    text("Aarav",30,100);
}   

