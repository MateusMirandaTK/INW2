const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017', 
{useNewUrlParser : true, usefiedTopology: true, serverSelectionTimeoutMS: 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open')

//teste
console.log("monitorando")