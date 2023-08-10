const express = require('express');
const app = express();

app.get('/ola/:nome/:cargo/', function(req, res){
    res.send(req.params)
})

app.listen(8081, function(){
    console.log('Conectado')
});