var http = require('http');
var os = require("os");
var http_port = '80';
var hostname = os.hostname();
const PORT=http_port

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end(hostname);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});