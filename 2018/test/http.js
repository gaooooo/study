 


var http= require('http');
var server= http.createServer();
server.on('request',function(req,res){

    res.end('hello');
});
server.listen(80,'127.0.0.1');
