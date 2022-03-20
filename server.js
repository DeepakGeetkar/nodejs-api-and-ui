/// create html page with the help of node js 

const http = require('http');
const page =`
<h1>hello welcome to node js page</>h1><br><br>
<input type= 'text'/> <br><br>
<input type= 'text'/> <br><br>
<input type= 'text'/> <br><br>
`
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write(page);
    res.end();

}).listen(2000);
