/// http module

  const  http = require('http');
const data =[
    {name:"deepak", age:'22',email:'deepak@gmail'},
    {name:"dram", age:'22',email:'deepdk@gmail'},
    {name:"deepak", age:'22',email:'deepak@gmail'},
    {name:"deepak", age:'22',email:'deepak@gmail'},
    {name:"deepak", age:'22',email:'deepak@gmail'}
]
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end("thanks for commig");

}).listen(2000);