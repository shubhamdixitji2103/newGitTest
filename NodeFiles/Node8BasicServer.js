var http = require('http');
function onRequest(request,response)
{
    console.log("user made a request"+request.url);
    response.writeHead(202,{"Context - Type": "text/plain"});
    response.write("Here is Response");
    response.end();
    
}
http.createServer(onRequest).listen(8080);
console.log("Server is running");