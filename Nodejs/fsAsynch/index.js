const fs = require('fs');

//To create file using Asynch

fs.writeFile('read111.txt','awasome days111',
(err)=>{
console.log('file is created');

})
;

/* fs.readFile('read1.txt','utf-8',(err,data)=>{

    console.log(data);
});*/



fs.appendFile("read111.txt","I am a software developer11111",'utf-8',(err,data)=>{

    console.log(data);
});