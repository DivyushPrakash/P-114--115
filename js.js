nosex = "";
nosey = "";

function preload() {

}

function setup() {
    canvas = createCanvas(620, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on("pose", getresults);
}

function modelloaded() {
    console.log("model loaded");
}

function draw() {
    image(video, 0, 0, 620, 450);

}

function clickphoto() {
    save("moustache.png");

}

function getresults(resultsarray) {
    if (resultsarray.length > 0) {
        console.log(resultsarray);
        nosex = resultsarray[0].pose.nose.x;
        nosey = resultsarray[0].pose.nose.y;
    }

}