const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/produto', 
{useNewUrlParser : true, 
useUnifiedTopology: true, 
serverSelectionTimeoutMS: 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function(){
    console.log("estamos logados no mongodb");

    });

    const produtoSchema = new mongoose.Schema({
        descrição : String,
        ano : Number,
        valor : Number,
        estoque : Number
    });

    const Produto = mongoose.model("Produto", produtoSchema);

const Livro = new Livro({
    descriçao : 'Livro de granada',
        ano : 2009,
        valor : 99,
        estoque : 5
})

console.log(Livro.descriçao)
console.log(Livro.ano)
console.log(Livro.valor)
console.log(Livro.estoque)
Livro.save();

const cu = new Pessoa({
    nome : 'cu',
    idade : 25,
    profissao : 'Jogador'
})

console.log(cu.nome)
console.log(cu.idade)
console.log(cu.profissao)
cu.save();