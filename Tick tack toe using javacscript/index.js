let music=new Audio('music.mp3');
let turnaudio=new Audio('ting.mp3');
let gameoveraudio=new Audio('gameover.mp3');
let reset=document.getElementById('reset')
let playerturn="X";
let isgameover=false;

// to check player turn 
const changeturn=()=>{

    return playerturn ==="X" ? "0":"X"    
}



// to check if the player has won


const checkwin=()=>{
    let textboxes=document.getElementsByClassName('text')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        
    ]

    wins.forEach(e=>{
        if((textboxes[e[0]].innerText === textboxes[e[1]].innerText) && (textboxes[e[1]].innerText === textboxes[e[2]].innerText) && (textboxes[e[0]].innerText !== '' ))
        {
            document.getElementsByClassName("player_text")[0].innerText  = textboxes[e[0]].innerText + " won the game";
             isgameover=true;
             gameoveraudio.play();
             music.pause();

             document.getElementsByTagName('img')[0].style.width = "200px";


        }
            })

        }

//gamelogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    // the first class with the name texst of the element which has been clicked 
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '')
        {
            boxtext.innerText = playerturn;   
            playerturn = changeturn();
            turnaudio.play();
            music.play();

            checkwin();
            console.log("Checkwin is called")
            if (!isgameover){
                document.getElementsByClassName("player_text")[0].innerText  = "Turn for " + playerturn;
            }
        }
    })

})

reset.addEventListener('click',()=>{
    boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach(element =>{
        element.innerText='';
                }) ;
        isgameover=false;
        playerturn="X";
        
        document.getElementsByClassName("player_text")[0].innerText  = "Turn for " +  playerturn;
        document.getElementsByTagName('img')[0].style.width = "0px";
        Array.from(boxes).forEach(element => {
        element.addEventListener('click', clickHandler);
    });
   
        })

   
        

