const express = require('express');

const app =express();

app.get('/',(req,resp)=>{

resp.send('app is working1');

});

app.listen(5000);