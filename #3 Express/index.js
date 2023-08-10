const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Seja Benvenido')
});

app.get('/sobre', function(req, res){
    res.send('Sobre!')
});

app.get('/blog', function(req, res){
    res.send('Meu blog!')
});

app.listen(8081, function(){
    console.log('Conectado')
});