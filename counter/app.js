const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");
let count=0

btns.forEach((e)=>{

    e.addEventListener("click",function (e) {

        if(e.target.classList.contains("decrease"))
        {
            count--;
        }
        else if (e.target.classList.contains("increase")){
            count++;
        }

        else if (e.target.classList.contains("reset")){
            count=0;
        }

        if(count<0){
            value.style.color="red"
        }

        else if(count>0){
            value.style.color="green"

        }
        else{
            value.style.color="black"
        }

        
        value.textContent=count;
    })

})