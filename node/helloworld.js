const http = require('http')
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'texplain');
    res.end('hello, node.js server')
});

const port = 3000;
server.listen(port, () =>{
    console.log('Servidor executando em http://localhost:$(port)/');

})