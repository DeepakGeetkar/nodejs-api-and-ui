// const express =require('express')
// const app = express();
// app.set('view engine','ejs')
// app.get('/profile/:name',function(req,res){
//     //res.sendFile(__dirname+'/home.html')
//     console.log(req.params.name)
//     res.render('profile',{name:req.params.name})
// })
// app.listen(1100);



const express =require('express')
const app = express();
app.set('view engine','ejs')
app.get('/data/:data',function(req,res){
    //res.sendFile(__dirname+'/home.html')
    data ={email:"deepakgeetkar1999@gmail.com",addres:"indore",skills:['java','python','javascript','nodejs','php'] }
    console.log(req.params.name)
    res.render('data',{name:req.params.name,data:data})
})
app.listen(1100);