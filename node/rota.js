var http = requiere('http');
var server = http.createServer(function(request, response){
    response.writeHead("200", {"content-type" : "text/http"});
    if(request.url == "/"){
        response.write("<h1>Pagina principal</h1>");
    }
    else if(request.url == "/bemvindo"){
        response.write("<h1>bem vindo</h1>");
    }
    else { response.write("<h1>pagina nao encontrada</h1>")

    }
    response.end();
}
)  
