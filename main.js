noseX = 0;
noseY = 0;
difference = 0;
left_wristX = 0;
right_wristX = 0;

function setup(){
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(560,500);
canvas.position(560, 150);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is initialized you won round 1");
}