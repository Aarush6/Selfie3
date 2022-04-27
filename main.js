var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();

}
Recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if (content == "take my selfie"){
        speak();
    };
    
}
function speak(){
    var synth = window.speechSynthesis;
   var speech_data = "taking selfie in 5 seconds";
    // var speech_data = document.getElementById("textbox").value;
var Utterthis = new SpeechSynthesisUtterance(speech_data);
synth.speak(Utterthis);
Webcam.attach(camera);
setTimeout(function(){
    img_id= "selfie1";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds"
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
},5000);
setTimeout(function(){
    img_id= "selfie2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 seconds"
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
},10000);
setTimeout(function(){
    img_id= "selfie3";
    take_snapshot();
    speak_data = "Taking your next Selfie in 15 seconds"
    var Utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(UtterThis);
},15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90

});
var camera=document.getElementById("camera");



function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = "<img id='selfie1' src='"+data_uri+"'/>";
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = "<img id='selfie2' src='"+data_uri+"'/>";
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = "<img id='selfie3' src='"+data_uri+"'/>";
        }
    });
};
function save(){
    link = document.getElementById("link");
    image = document.getElementById("captured_image").src;
    link.href = image;
    link.click();

}

