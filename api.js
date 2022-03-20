const http = require('http');
const fs=require('fs');
http.createServer(function(req,res){
fs.readFile('text.html',function(err,data){
    res.writeHead(200,{'Contect-type':'text/html'});
    res.write(data);
    res.end();
    
})
}).listen(1000);