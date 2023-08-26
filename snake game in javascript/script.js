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
    // console.log(ctime)
    window.requestAnimationFrame(main);
    if((ctime- lastPaintTime)/1000 < 1/speed)
    {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();   
}

function iscollide() {
    
}


function gameEngine() {
    // case : when snake collides   
    if(iscollide(snakeBody))
    {
        Gameovermusic.play();
        bgmusic.pause();
        // resetting the snake position
        inputdir={x:0,y:0};
        alert('Game Over, press any key to play again')
        snakeBody=[{
            x:14,y:15
        }]
        bgmusic.play();
        score=0;       
    }

    if(snakeBody[0].y==food.y && snakeBody[0].x==food.x)
    {
        // body will be shifted to one block ahead after eating the food
        snakeBody.unshift({x:snakeBody[0].x+inputdir.x ,y:snakeBody[0].y+inputdir.y})
        let a=2;
        let b=16;
        // to generate random numbers the below method is used 
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}
    }

    // when the snake moves

    for(let i=snakeBody.length-2;i>=0;i--)
    {
        // using destructuring because 
        snakeBody[i+1]={...snakeBody[i]};
    }

        snakeBody[0].x+=inputdir.x;
        snakeBody[0].y+=inputdir.y;
        

    board.innerHTML="";
    snakeBody.forEach((e,index)=>{
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart=e.y;
        snakeelement.style.gridColumnStart=e.x;
        
        if(index===0)
        {
            // add the head of the snake at the begining when the index is 0 to the board
            snakeelement.classList.add('head');
        }
        else
        {
            // further keep adding the body when the snake eats the food each time 
            snakeelement.classList.add('snakebody');
            
        }
        // add the complete snake to the board 
        board.appendChild(snakeelement); 
                    });

        foodelement=document.createElement('div');
        foodelement.style.gridRowStart=food.y;
        foodelement.style.gridColumnStart=food.x;
        foodelement.classList.add('food');
        board.appendChild(foodelement);     
    
}

















// main logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputdir={x:0,y:1}
    movemusic.play();
    switch (e.key) {
        case "ArrowUp":
            inputdir.x=0;
            inputdir.y=-1;
            
            console.log("arrowup")
            break;
        case "ArrowDown":
            inputdir.x=0;
            inputdir.y=1;
                console.log("arrowdown")
                break;
        case "ArrowLeft":
            inputdir.x=-1;
            inputdir.y=0;
                console.log("arrowleft")
                break;
        case "ArrowRight":
            inputdir.x=1;
            inputdir.y=0;
            console.log("arrowright")
            break;
    
        default:
            break;
    }

})