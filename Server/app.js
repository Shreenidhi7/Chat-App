const express=require('express')
const app=express();

app.set('view engine','ejs');
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("http.html")
})
server=app.listen(5000)

const io=require("socket.io").listen(server)

io.sockets.on("connection",function(socket)
{
    console.log("new user connected");
    
})