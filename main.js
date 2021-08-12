song1="";
song2="";
song1_status="";
song2_status="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
scoreleftWrist=0;
scorerightWrist=0;
function preload(){
 
    song1=loadSound("videoplayback (1).mp4");
    song2=loadSound("music.mp3");
}
function setup (){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}


function Play(){
song.play();
song.setVolume(1);
song.rate(1);

}
function Stop(){
song.stop();
}
function modelLoaded(){
    console.log("poseNet loaded");
}
function gotposes(results)
{
    if(results.length>0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist= "+scoreleftWrist);
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log("scorerightWrist= "+scorerightWrist);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
console.log("leftwristx= "+leftwristx);
console.log("leftwristy= "+leftwristy);
rightwristx=results[0].pose.rightWrist.x;
rightwristy=results[0].pose.rightWrist.y;
console.log("rightwristx= "+rightwristx);
console.log("rightwristy= "+rightwristy);
  }

}
function draw (){
    image(video,0,0,600,500);
    song1_status=song1.isPlaying();
    song2_status=song2.isPlaying();
    fill("#56BFE8");
    stroke("#56BFE8");
    if(scorerightWrist>0.2)
    {
      circle(rightwristx,rightwristy,20);
      song2.stop();
      if(song1_status==false){
          song1.play();
          document.getElementById("song").innerHTML="song1 is playing";
      }}
      
      if(scoreleftWrist>0.2)
      {
        circle(leftwristx,leftwristy,20);
        song1.stop();
        if(song2_status==false){
            song2.play();
            document.getElementById("song").innerHTML="song2 is playing";
        }}
       
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);

}