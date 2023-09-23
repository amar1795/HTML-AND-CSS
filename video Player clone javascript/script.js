const playPauseBtn= document.querySelector(".play-pause-btn");
const videoContainer= document.querySelector(".video-container");
const video=document.querySelector("video");

playPauseBtn.addEventListener("click",toggleplay);

video.addEventListener("click",toggleplay);

document.addEventListener("keydown",e=>{
switch(e.key.toLowerCase()){
    case " ":
    case "k":
        toggleplay();
        break;
}

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