//  const fs =require('fs')
//  const rs=fs.createReadStream('./text.html');
//  rs.on('oprn',function(){
//      console.log('demo file is open')
//  })



const events = require('events')
const eventsEmitter = new events.eventEmitter('events');  

eventsEmitter.on("speak",function(name){
    console.log(name,"is speking");
})

eventsEmitter.emit("speak","petter")