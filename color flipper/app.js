const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn=document.getElementById("btn");
const colour=document.querySelector(".colour");

btn.addEventListener("click",function () {
    
    const randomNumber=getRandomNumber();
    document.body.style.backgroundColor=colors[randomNumber];

})


function getRandomNumber() {
    console.log(Math.floor(Math.random()*colors.length))
    return Math.floor(Math.random()*colors.length)
    
}