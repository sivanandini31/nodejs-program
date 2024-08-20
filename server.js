//import express module
var express=require('express')


var app=express()
var port=9000;
 
app.get('/about',(req,res)=>{
    res.send('About Page');
})


app.get('/users/:name',(req,res)=>{
    var userName=req.params.name;
    res.send('hello,${userName}!');
})


app.listen(port,()=>{
    console.log('server running');
})