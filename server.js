const express = require('express');
const path = require('path')
const app=express();
const port=8080
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/HelloWorld.html'));
  });*/
app.get("/",function (req,res,)
{
    res.send('HELLO WORLD')
})

app.use('/',(req,res,next)=>{
    console.log("NEW REQUEST AT "+ Date.now());
    next();
})
app.listen(port, ()=> 
{
    console.log('Server online, Port ',port)
})