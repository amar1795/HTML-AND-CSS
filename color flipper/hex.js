const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const colour=document.querySelector(".color");

btn.addEventListener("click",function () {
    
    let hexColor="#"
    for (let i = 0; i < 6; i++) {
        hexColor+=hex[getRandomNumber()]  
    }

    colour.textContent = hexColor;
    document.body.style.backgroundColor=hexColor;

})


function getRandomNumber() {
    // console.log(Math.floor(Math.random()*colors.length))
    return Math.floor(Math.random()*hex.length)
    
}