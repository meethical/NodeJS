let http = require('http');

// A função '.createServer' serve para abrir um servidor http
// A função '.listen' serve para informar a porta da rede que vai ser aberto o servidor
http.createServer(function(req, res){
    res.end('Olá')
}).listen(8081);

console.log('O servidor está rodando!');