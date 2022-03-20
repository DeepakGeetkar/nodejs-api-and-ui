const express =require('express')
const app = express();
app.use('/assects.js',express.static('assects'))
const bodyParser=require('body-parser')
const encoder = bodyparser.urlencoded() ;
app.set('view engine','ejs')
app.get('/profile',function(req,res){
    //res.sendFile(__dirname+'/home.html')
    data ={email:"deepakgeetkar1999@gmail.com",addres:"indore",skills:['java','python','javascript','nodejs','php'] }
    console.log(req.params.name)
    res.render('profile',{name:req.params.name,data:data})
})
app.post('/login', encoder ,function(req,res){
    console.log(req.body.Email)
    res.render('home')
})

app.get('/login',function(req,res){
    console.log(req.query)
    res.render('login')
})
app.get('/',function(req,res){
    
    res.render('home')
})
app.listen(1100);