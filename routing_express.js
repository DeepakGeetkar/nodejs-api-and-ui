// const express = require('express');
// const app=express();

// app.get('/',function(req,res){
//     res.send("hello world i am express")
// })

// app.get('/user',function(req,res){
//     res.send("hello world i am user express")
// })


// app.get('/login',function(req,res){
//     res.send("hello world i am login express")
// })


// app.get('/about',function(req,res){
//     res.send("hello world i am  about express")
// })


// app.get('/conctet',function(req,res){
//     res.send("hello world i am contect express")
// }).listen(1100)



//////// post method   and put or delect //////
const express = require('express');
const app=express();

app.post('/',function(req,res){
    res.send("hello world i am express")
})

app.post('/user',function(req,res){
    res.send("hello world i am user express")
})


app.post('/login',function(req,res){
    res.send("hello world i am login express")
})


app.delete('/about',function(req,res){
    res.send("hello world i am  about express")
})


app.put('/conctet',function(req,res){
    res.send("hello world i am contect express")


}).listen(1300)