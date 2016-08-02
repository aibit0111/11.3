var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.get('/', function(req,res){
    res.render('home', { title: 'Hey', message: 'Hello there!'});
});
app.listen(909,function(req,res){
    console.log("Server has strated");
});