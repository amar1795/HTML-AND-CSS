// server handling socket.io connections

const io = require("socket.io")(8000, {
    // to allow client and nodeserver interaact we use cors
    cors: {
      origin: "http://127.0.0.1:5500"
    }
  });
const users={};

io.on("connection",socket=>{
    socket.on("new-user-joined",name=>{
        console.log("new user",name)
        users[socket.id]=name;
        socket.broadcast.emit("user-joined",name);
    });

     socket.on("send",message=>{
        socket.broadcast.emit("receive",{message:message,name: users[socket.id]});
    });
        socket.on("disconnect",message=>{
        socket.broadcast.emit("leave",users[socket.id]);
        delete users[socket.id]});



})