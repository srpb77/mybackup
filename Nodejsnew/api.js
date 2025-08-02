const dbConnect = require('./mongodb');
const express = require('express');
const app = express();
const mongodb = require('mongodb');
app.use(express.json());
app.get('/',async (req,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});


app.post("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)

});

//Using Parameter
/*
app.put("/:name", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
{name:req.params.name},
{$set:req.body}

    )
    resp.send({result:"update"})

});
*/

//Using without parameter update

app.put("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
{name:req.body.name},
{$set:req.body}

    )
    resp.send({result:"update"})

});

app.delete("/:id", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send({result:"deletred"})
});


app.listen(43000)