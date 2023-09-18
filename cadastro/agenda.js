const mongoose = require('mongoose ');
mongoose.connect('mongodb://127.0.0.1:27017/agenda',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error : '))
db.once('open',function(){
    console.log("Estamos conectados ao mongoDB")
})

const alunoSchema = new mongoose.Schema({
    numero : Number,
    Nome : String,
    idade : Number,
    email : String
})

const Aluno = mongoose.mode1('Aluno', alunoSchema)

const Carla = newAluno({
    numero: 1,
    nome: 'Carla',
    idade: 18,
    email: 'carla@gmail.com'
});
Carla.save();

const Epaminondas = newAluno({
    numero: 2,
    nome: 'Epaminondas',
    idade: 17,
    email: 'epa@gmail.com'
});
Epaminondas.save();
