const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Nodemon')
})

app.listen(8081, function(){
    console.log('Conectado')
});

// Para instalar o Nodemon usa-se o npm i nodemon -g para instalar globalmente na sua máquina

//npx nodemon nomeDoArquivo.js para iniciar