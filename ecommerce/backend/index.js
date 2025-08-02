const express =require('express');

const app=express();

app.get("/create",(req,resp)=>{
resp.send("App is working1111")

});

app.listen(6000);