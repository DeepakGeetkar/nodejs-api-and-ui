const mysql = require('mysql');
const con = mysql.createConnection({
    host:'localhost',
    user:'root@192.168.30.20',
    password:'',
    database:'deepak'

});
con.connect(function(error){
    if (error) throw error;
    con.query("Select * from info", function(err,result){
        if(err) throw err;
        console.log("all result are here",result)
    })
})