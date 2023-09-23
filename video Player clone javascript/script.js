const playPauseBtn= document.querySelector(".play-pause-btn");
const theaterBtn= document.querySelector(".theater-btn");
const fullScreenBtn= document.querySelector(".full-screen-btn");
const miniPlayerBtn= document.querySelector(".mini-player-btn");



const videoContainer= document.querySelector(".video-container");
const video=document.querySelector("video");

playPauseBtn.addEventListener("click",toggleplay);

video.addEventListener("click",toggleplay);

document.addEventListener("keydown",e=>{
    const tagName=document.activeElement.tagName.toLowerCase();

    if(tagName === "input") return;

switch(e.key.toLowerCase()){
    case " ":
        if(tagName === "button") return;
    case "k":
        toggleplay();
        break;
    case "t":
        toggleTheaterMode();
        break;
    case "i":
        toggleMiniPlayerMode();
        break;
    case "f":
        toggleFullScreenModeff();
        break;

}

})


// view modes
theaterBtn.addEventListener("click",toggleTheaterMode);
fullScreenBtn.addEventListener("click",toggleFullScreenMode);
miniPlayerBtn.addEventListener("click",toggleMiniPlayerMode);



function toggleTheaterMode() {
    videoContainer.classList.toggle("theater")
}

function toggleFullScreenMode() {
  if(document.fullscreenElement ==null)
  {
    videoContainer.requestFullscreen();
  }
  else{
    document.exitFullscreen();
  }

}

function toggleMiniPlayerMode() {

    if(videoContainer.classList.contains("mini-player"))
    {
        document.exitPictureInPicture();

    }
    else{
        video.requestPictureInPicture();
    }
}

video.addEventListener("enterpictureinpicture",()=>{
    videoContainer.classList.add("mini-player")
})

video.addEventListener("leavepictureinpicture",()=>{
    videoContainer.classList.remove("mini-player")
})





document.addEventListener("fullscreenchange",()=>{
    // works without ,document.fullscreenElement as well
    videoContainer.classList.toggle("full-screen",document.fullscreenElement);
})

function toggleplay() {
    video.paused ? video.play() :video.pause(); 
}


video.addEventListener("play",()=>{
    videoContainer.classList.remove("paused")
})

video.addEventListener("pause",()=>{
    videoContainer.classList.add("paused")
})  