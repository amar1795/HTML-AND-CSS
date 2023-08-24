let scorecard=document.querySelector(".score_card");
let endscore=document.querySelector(".end_score");


score=0;


 let gameaudio=new Audio('./sounds/background.mp3')
//  let gameover=new Audio('./sounds/over.mp3')
// unable to play game over audio

let jump=new Audio('./sounds/jump.mp3')



    setTimeout(() => {
        gameaudio.play();
    }, 500);
cross=true;
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


setInterval(() => {

   
    dino=document.querySelector(".dino")
    gameover=document.querySelector(".gameover");
    obstacle=document.querySelector(".cactus");
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    console.log(dx,dy)
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<93 && offsetY<52)
    {
        
        gameover.style.display="block";

        // this will pause the obstacle
        obstacle.classList.remove("obstacleAni")
        
        setTimeout(() => {
            // gameover.play();
            gameaudio.pause();
            console.log("music is paused")
        }, 500);

            scorecard.style.display="none";
            endscore.innerHTML="Your Score : "+ score;

    }
        // if keep jumping then it will fall into else if
    else if(offsetX <105 && cross ){
        jump.play();
        score=score+1;
        totalscore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            // to increase the speed after every score 
            // we want to calculate the exact speed hence we have taken parsefloat rather than parseint which will give use the exact value
            animationDuration=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newnimationDuration=animationDuration - 0.1 ;
            obstacle.style.animationDuration=newnimationDuration + "s";
            console.log("new animatio  duration  is "+newnimationDuration)
            
        }, 500);

    }

}, 10);

function totalscore(score) {
    // scorecard.style.display="none";
    scorecard.innerHTML="Your Score : "+ score;
    console.log(score)
    
}