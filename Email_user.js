const nodemailer = require('nodemailer');
const { PassThrough } = require('stream');
const transport = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'geetkar146@gmail.com',
        pass:'9753414725'
    }

});
const mailOpection ={
    from:'geetkar146@gmail.com',
    to:'geetkar146@gmail.com',
    subject:'test node mail',
    text:'hello i am deepak geetkar'
}
transport.sendMail(mailOpection,function(error,info){
if (error){
    console.log(error);
}
else {
    console.log("email has been sent",info.response)
}
});