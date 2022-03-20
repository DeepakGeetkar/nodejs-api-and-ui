//const nodemon =require('nodemon')
const express = require('express');
const app=express();


const  checkUrl=function(req,res,next)
{
    console.log("current route is ",req.originalUrl)
next();
}
app.use(checkUrl);
app.get('/',function(req,res){
    res.send("hello world i am express")
})

app.get('/user',function(req,res){
    res.send("hello world i am user express")
})


app.get('/login',function(req,res){
    res.send("hello world i am login express")
})


app.get('/about',function(req,res){
    res.send("hello world i am  about express")
})


app.get('/conctet',function(req,res){
    res.send("hello world i am contect express")
})
app.listen(1100)