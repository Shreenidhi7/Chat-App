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