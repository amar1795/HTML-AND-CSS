const socket=io('http://localhost:8000');

const form=document.getElementById('send-container');
const messageInput=document.getElementById('inputmessage');
const messageContainer=document.querySelector('.container');
const audio =new Audio('')

const append =(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;

    messageElement.classList.add("message");
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
}


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value;
    append(`${message}`,'right')
    socket.emit("send",message)
    messageInput.value="";
})

const username= prompt("enter your name");
socket.emit("new-user-joined",username);


socket.on("user-joined",name=>{
    append(`${name} has joined the chat`,"right")
    
});

socket.on("receive",data=>{
    console.log("data received")
    append(`${data.name}:${data.message}`,"left")
    
});

socket.on("leave",data=>{
    console.log("data received")
    append(`${data} : has left the chat `,"left")
    
});


