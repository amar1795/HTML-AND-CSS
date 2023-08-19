setInterval(() => {
    let hour=document.querySelector(".hour")
    let minutes=document.querySelector(".minutes")
    let seconds=document.querySelector(".seconds")


    let date=new Date();
    let hourstime=date.getHours();
    let minutestime=date.getMinutes();
    let secondstime =date.getSeconds();
    
    hourrotation=30*hourstime+minutestime/2;
    minuterotation=6*minutestime;
    secondsrotation=6*secondstime;

    hour.style.transform=`rotate(${hourrotation}deg)`
    minutes.style.transform=`rotate(${minuterotation}deg)`
    seconds.style.transform=`rotate(${secondsrotation}deg)`
    console.log(minutestime)
}, 1000);