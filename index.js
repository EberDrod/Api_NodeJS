const express = require('express');
//IMportar mongo db
const mongoose = require('mongoose');
//Importar Routing
const routes = require('./routes');
//Importa body Parser para enviar datos tipo JSON
const bodyParser = require('body-parser');

// Crear el Server
const app = express();

//conectar a mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
// -------> Habilitar body-parser <---------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//---->Habilitar routing<-----(Middlewares)
app.use('/', routes());

// Definir un puerto con un calback
app.listen(4000, () => {
  console.log('Servidor Funcionando');
});
