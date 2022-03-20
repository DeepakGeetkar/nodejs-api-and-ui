const http = require('http')
http.createServer(function(req,res){
    res.write('hello nodemon')
    res.end();
}).listen(1500)