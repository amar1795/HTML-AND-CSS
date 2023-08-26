let direction={x:0,y:0};
let foodmusic=new Audio('./music/food.mp3')   
let Gameovermusic=new Audio('./music/gameover.mp3')   
let bgmusic=new Audio('./music/music.mp3')   
let movemusic=new Audio('./music/move.mp3')   
let speed=2;
let lastPaintTime=0;
const board=document.querySelector('.board')

// snake body array , this will be array as when the snake eats the body blocks get added up
let snakeBody=[{
    x:14,y:15
}]

// food will not be an array as it will be only 1 block which will be placed at random orders
let food={
    x:6,y:7
}

function main(ctime) {
    // for animating with proper frames , not using set timeout as it will not give smooth animations

    window.requestAnimationFrame(main);
    if((ctime- lastPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();   
}



function gameEngine() {

    board.innerHTML="";
    snakeBody.forEach((e,index)=>{
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart=e.y;
        snakeelement.style.gridColumnStart=e.x;
        snakeelement.classList.add('head');
        board.appendChild(snakeelement);     
    })

        foodelement=document.createElement('div');
        foodelement.style.gridRowStart=e.y;
        foodelement.style.gridColumnStart=e.x;
        foodelement.classList.add('food');
        board.appendChild(foodelement);     
    
}


















Window.requestAnimationFrame(main);