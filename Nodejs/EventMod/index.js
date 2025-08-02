const EventEmitter = require('events');

const event = new EventEmitter();

event.on("sayhello",()=>{

console.log('My name is santosh');

});

event.on("sayhello",()=>{

    console.log('kumar');
    
    });

    event.on("sayhello",()=>{

        console.log('bharti');
        
        });

event.emit("sayhello");