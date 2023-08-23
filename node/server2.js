const {createServer} = requiere('http')

let server = createServer((request,response)=>{
    response.writeHead(200,{"content-type" : "text/html"});
    response.write(`
    <h1>Hello World 2</h1>
    <p>pagina html usando node.js</p>`);
    response.end();
})

const port = 8000;
server.listen(port,()=>{
    console.log(`Usando a porta${port} na url https://localhost:${port}`)
}
)