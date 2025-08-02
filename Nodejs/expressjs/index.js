const express = require('express');
const path = require('path');
const app = express();


const publicPath= path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('',(_,resp)=>{

    resp.sendFile(`${publicPath}/index.html`)
});

app.get('/about',(_,resp)=>{

    resp.sendFile(`${publicPath}/about.html`)
});

app.get('/profile',(_,resp)=>{
const user={
name:'santosh',
email:'sbhartimca09@gmail.com',
city:'Noida'

}
resp.render('profile',{user});

});

app.get('*',(_,resp)=>{

    resp.sendFile(`${publicPath}/404.html`)
});

//console.log(publicPath);

//app.use(express.static(publicPath));





/*
app.get('',(req,resp)=>{

    console.log('Data sent by browser',req.query.name);

resp.send("Welcome to home page "+ req.query.name );});
resp.send(`
<h1>Welcome to home page</h1><a href="/about">Go to about us page</a>
`);});


app.get('/about',(req,resp)=>{

    resp.send("Welcome to About us page");});

    app.get('/contact',(req,resp)=>{

        resp.send(`
        <input type="text" name="name" placeholder="please insert full name" value="${req.query.name}" />
        <input type="submit" name="submit" value="Click me" />
        
        `);}); 
        */
        
        app.listen('5000');