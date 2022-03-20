//const nodemon =require('nodemon')
const express = require('express');
const app=express();
const router = express.Router();
const  urlCheck=function(req,res,next){

    console.log("current route is ",res.originalUrl)
next();
}
//app.use(urlCheck);
app.get('/',function(req,res){
    //res.send("hello world i am express")
    res.sendFile(__dirname+"/home.html")
})

router.get('/user',function(req,res){
    res.send("hello world i am user express")
    
})


router.get('/login',function(req,res){
    res.send("hello world i am login express")
    res.sendFile(__dirname+"/.html")
})


router.get('/about',function(req,res){
    //res.send("hello world i am  about express")
    res.sendFile(__dirname+"/about.html")
    
})


app.get('/conctet',function(req,res){
    res.send("hello world i am contect express")
})
app.use('/',router);
app.listen(1100);