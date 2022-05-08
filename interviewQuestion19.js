var express = require('express')
var app = express()

app.get('/home',(req,res) =>{
 res.send("hello")
}).listen(4000);
