const express =require('express');
const multer =require('multer');

const app =express();

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./images')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now() +"--"+ file.originalname);
        },
});

const upload = multer({storage:fileStorageEngine});

app.post('/single',upload.single('images'),(req,res)=> {
    console.log(req.file);
    res.send("single fill uploaded")
})

app.post('/multipale',upload.array('images',5),(req,res)=>{
    console.log(req.files);
    res.send("multipale fil uploded....");
});

app.listen(900);