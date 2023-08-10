const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/html/index.html')
});

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
});

//__dirname é o diretório raiz da aplicação

app.listen(8081, function(){
    console.log('Conectado')
});