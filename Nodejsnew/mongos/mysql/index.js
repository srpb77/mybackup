const express = require('express');
const con= require("./config");
const app=express();

app.use(express.json())
app.get("/",(req,resp)=>{
con.query("select * from user",(err,result)=>{
if(err){
resp.send("error");

}else{
    resp.send(result);
}

});
});


app.post("/",(req,resp)=>{

    const data = req.body;
    con.query("insert into user set ?",data,(err,result)=>{
    if(err){
    resp.send("error");
    
    }else{
        resp.send(result);
    }
    
    });
    });

    app.put("/:id",(req,resp)=>{

        const data = [req.body.name,req.body.userid,req.body.psw,req.params.id];
        con.query("update user set name=?, userid=?,psw=? where id=?",data,(err,result,fields)=>{
        if(err){
        resp.send("error");
        
        }else{
            resp.send(result);
        }
        
        });
        });


        app.delete("/:id",(req,resp)=>{

            
            con.query("delete from user where id=" +req.params.id ,(err,result)=>{
            if(err){
            resp.send("error");
            
            }else{
                resp.send(result);
            }
            
            });
            });

app.listen(5000);