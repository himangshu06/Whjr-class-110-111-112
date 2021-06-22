Webcam.set({
    width:310,
    height:300,
    imageFormat:'png',
    pngQuality:90,
    constraints:{
        facingMode:"environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="Captured" src="'+data_uri+'"/>';

});
}

console.log("ml5 version:",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelLoaded);

function modelLoaded(){
    console.log("modelLoaded!");
}

function check(){
    img = document.getElementById("Captured");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
 if (error){
     console.error(error);
 }
 else{
     console.log(results);
     document.getElementById("object_name").innerHTML=results[0].label;
 }
}

