/*var http=require('http')



http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello World\n');
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');

 */
/*
const express=require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send("Hello World")
})
server=app.listen(5500)



var socket;

const io=require(socket.io)(server)
io.on("connection",(socket) =>{
    console.log("new user connected")
      
})
*/
/************************************************************************************************ */



const router=require('./Routes/routes')
const express=require('express')
const bodyParser=require('body-parser')
const expressValidator=require('express-validator')
const chatControllers=require('./Controllers/chat.Controller')
const app=express();

app.use(bodyParser.urlencoded({ extended:true }))
app.use(expressValidator());
app.use(bodyParser.json())

//define a simple route

app.use('/',router);
require('dotenv').config()
/**
 *   Configuring the database
 */
const dbConfig=require('./Config/db.Config');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
/**
 * connecting to the database
 */

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfully connected to the database");    
}).catch(err =>{
    console.log("Couldnot Connect to the database.Exiting now...!",err);
    process.exit();
    
});
/**
 * listen for requests
 */
const server=app.listen(4000,()=>{
    console.log("Server is listening on port 4000");   
});
connections=[];
const io=require('socket.io').listen(server)
io.sockets.on("connection",function(socket)
{
console.log("hai io connected");
connections.push(socket)
console.log("user connected");
socket.on('new_msg',function(req)
    {
        chatControllers.addMessage(req,(err,result) =>{
            if(err)
            {
                console.log("error on server while receiving data");
            }
            else
            {
                //socket.emit('emitMsg',result)
            }
            io.emit(req.receiverId,req)
            io.emit(req.senderId,req)    
            })
        })
    })
/**
 * Disconnect
 */
io.on("disconnect",function(data)
{
    connections.splice(connections.indexOf(socket),1)
    console.log("user Disconnected");
    
})

























