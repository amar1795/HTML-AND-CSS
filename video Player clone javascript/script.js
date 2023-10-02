const playPauseBtn= document.querySelector(".play-pause-btn");
const theaterBtn= document.querySelector(".theater-btn");
const fullScreenBtn= document.querySelector(".full-screen-btn");
const miniPlayerBtn= document.querySelector(".mini-player-btn");
const currentTimeElem= document.querySelector(".current-time");
const totalTimeElem= document.querySelector(".total-time");
const captionsBtn= document.querySelector(".captions-btn");
const SpeedBtn= document.querySelector(".speed-btn");
const previewImg= document.querySelector(".preview-img");
const thumbnailImg= document.querySelector(".thumbnail-img");
const muteBtn= document.querySelector(".mute-btn");
const volumeSlider= document.querySelector(".volume-slider");
const videoContainer= document.querySelector(".video-container");
const video=document.querySelector("video");
const timelineContainer=document.querySelector(".timeline-container");


timelineContainer.addEventListener("mousemove",handleTimeUpdate);

function handleTimeUpdate(e) {
    const rect=timelineContainer.getBoundingClientRect();
    const percent=Math.min(Math.max(0, e.x - rect.x), rect.width)/rect.width;
    const previewImgNumber=Math.max(1,Math.floor((percent * video.duration)/10));
    const previewImgSrc=`assests/previewImages/preview${previewImgNumber}.jpg`;

    previewImg.src =previewImgSrc;
    timelineContainer.style.setProperty("--preview-position",percent);


    if(isScrubbing){
        e.preventDefault();
        thumbnailImg.src=previewImgSrc;
        timelineContainer.style.setProperty("--progress-position",percent)
    }
    
}

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
    case "m":
            toggleMute();
            break;

        case "arrowleft":
            case"j" :
           skip(-5)
            break;

         case "arrowright":
            case"l" :
           skip(5)
            break;
         case "c":
            toggleCaptions();
                break;

            

}

})


// speed function

SpeedBtn.addEventListener("click",changePlaybackSpeed)

function changePlaybackSpeed() {

    let newPlaybackRate=video.playbackRate + 0.25;
    if(newPlaybackRate>2) newPlaybackRate=0.25
    video.playbackRate =newPlaybackRate
    SpeedBtn.textContent=`${newPlaybackRate}x`;

    
}


// captions

const  captions=video.textTracks[0]
captions.mode="hidden"

captionsBtn.addEventListener("click",toggleCaptions)

function toggleCaptions() {
    const isHidden=captions.mode ==="hidden"
    captions.mode=isHidden ? "showing" :"hidden"
    videoContainer.classList.toggle("captions",isHidden)
    
}


// this shows the complete video duration
video.addEventListener("loadeddata",()=>{
    totalTimeElem.textContent=formatDuration(video.duration);
})

// this will show the current video time
video.addEventListener("timeupdate",()=>{

    const percent=video.currentTime/video.duration;
    timelineContainer.style.setProperty("--progress-position",percent)
    currentTimeElem.textContent=formatDuration(video.currentTime)
})

const leadingZeroFormatter=new Intl.NumberFormat(undefined,{
    minimumIntegerDigits:2,
})

function formatDuration(time) {
    const seconds=Math.floor(time%60);
    const minutes=Math.floor(time/60)%60;
    const hours=Math.floor(time/3600);
    if(hours==0)
    {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`
    }

    else{
        return `${1}:${leadingZeroFormatter.format(2)}:${leadingZeroFormatter.format(3)}`
    }
    
}

function skip(duration) {
    video.currentTime+=duration;
    
}

// volume

muteBtn.addEventListener("click",toggleMute);
volumeSlider.addEventListener("input",e=>{
    video.volume=e.target.value
    video.muted = e.target.value === 0;
})

function toggleMute() {
    video.muted=!video.muted; 
}

video.addEventListener("volumechange",()=>{
    volumeSlider.value=video.volume
    let volumeLevel
    if(video.muted || video.volume === 0)
    {
        volumeSlider.value=0;
        volumeLevel= "muted";    
    }
    else if(video.volume >=.5)
    {
        volumeLevel="high";
    }

    else{   
        volumeLevel="low"
    }

    videoContainer.dataset.volumeLevel=volumeLevel;
  
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