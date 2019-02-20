var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(1200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   //response("The first program \n")
  // process.stdout.write('ok\033[0G');
   response.end('Hello World\n');
   
}).listen(8579);

// Console will print the message
console.log('Server running at http://127.0.0.1:8579/');