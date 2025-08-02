
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'ecom';

const client = new MongoClient(url);

async function getData()

{

let result = await client.connect();
let db = result.db(database);
let collection = db.collection('products');
let response = await collection.find({}).toArray();
console.log(response);

}

getData();


/* const express = require('express');
const path = require('path');

const reqFilter=require('./middleware');
const app = express();



//app.use(reqFilter);


app.get('',(req,resp)=>{

resp.send('Welcome to home page');

});

app.get('/login',reqFilter,(req,resp)=>{

    resp.send('This is login page');
    
    });
        
        app.listen('5000');

        */