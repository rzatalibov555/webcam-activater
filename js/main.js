


window.onload = function(){
    var constraints = {
        audio: true,
        video: true
    }

    navigator.mediaDevices.getUserMedia(constraints).then(function(mediastream){
    var video = document.querySelector("video");
    video.srcObject = mediastream;
    video.play();
    }).catch(function(err){
        console.log("Error!"+err.message)
    })

}