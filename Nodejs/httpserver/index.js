const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
//console.log(req.url);
if(req.url=="/"){
    res.end("Hello This is home page");

}else if(req.url=="/about"){
    res.end("Hello This is about us page");

}else if(req.url=="/userapi"){
    fs.readFile(`${__dirname}/userapi/userapi.json`,"utf-8",(err,data)=>{
   
const objectdata = JSON.parse(data);
res.writeHead(200,{"content-type":"application/json"});
res.end(objectdata[1].contact.email);

     });
    
    //res.end("Hello This is about us page");

}else{
    res.writeHead(404,{"content-type":"text/html"});
    res.end("404 error page does not exist");

}



});

server.listen(8000,"127.0.0.1",()=>{

console.log("port number is 80000");

});

