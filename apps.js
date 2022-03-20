const { name } = require('ejs');
const express = require('express');
const res = require('express/lib/response');
const apps = express();
const mongoose = require('mongoose');
//const User = require('./users')
const User = require('./models/users')
const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
const jsonParser = bodyParser.json();
mongoose.connect('mongodb+srv://deepak:9753414725@cluster0.rh7w8.mongodb.net/youtubemyFirstDatabase?retryWrites=true&w=majority',
    {
        useNewUrlparser: true,
        useUnifiedTopology: true
    }
);

///// making a get api form code////////////
apps.get('/users', function (req, res) {
    User.find().select('name').then((data) => {
        res.status(201).json(data)
    })
})



/////////// making post api ///////

apps.post('/user', jsonParser, function (req, res) {
                           // update a data
    const data = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        addres: req.body.addres
    })
    data.save().then((result) => {
        res.status(200).json(result)
    })
        .catch((error) => console.log(error))
})


/////////// delet api in server///

apps.delete('/user/:id',function(req,res){
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{console.log(err)})
})



///// using put api in node js and upate a data in api
apps.put('/user/:id', jsonParser,function(req,res){
    User.updateOne({_id:req.params.id},
        {$set:{
            name:req.body.name,
            email:req.body.email,
            addres:req.body.addres
        }}
        ).then((result)=>{
            res.status(200).json(result)
        }).catch((err)=>{console.log(err)})
})

/////////// using surach api in node js///////

apps.get("/search/:name",function(req,res){
    const regex = new RegExp(req.params.name,'i');
    User.find({name:regex}).then((result)=>{
        res.status(200),json(result)
    })
})

apps.listen(1400)



// ).then(()=> {console.log('db connection done');
// })
/////////////////////////////////////////////////////////////////////////////
// User.find({}, function (err, users) {
//     if (err) console.log(err);
//     console.log(users)
// })

////////////////////////////////////
// const data = new User({
//     _id: new mongoose.Types.ObjectId(),
//     name: "tony",
//     email: 'tony@gmail.com',
//     address: "UAI"

// });
// data.save().then((result) => {
//     console.log(result);
// });
