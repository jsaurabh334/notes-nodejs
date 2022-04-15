const events = require("events")

const event = new events.EventEmitter();
event.on('saymyname',()=>{
    console.log("your name is saurabh")
})
event.on('saymyname',()=>{
    console.log("your name is jain")
})
event.emit("saymyname")
