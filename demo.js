////  how to create a server to sand a reqvest and server give responce////

// call back function
const http =require('http');
http.createServer(function(req,res){
    res.write("Hello welcome to over home page");
    res.end("thankyou so much for visit over site");
}).listen(5000)