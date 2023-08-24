document.onkeydown= function(e){
    console.log("keycode is "+ e.keyCode)
    if(e.keyCode== 38)
    {
        dino=document.querySelector('.dino');
        dino.classList.add("animatedino");
        setTimeout(() => {
            dino.classList.remove("animatedino")
        }, 400);

    }

    //right arow button
    if(e.keyCode== 39)
    {
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinox+112+"px";

    }

    if(e.keyCode== 37)
    {
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinox-112)+"px";

    }
}