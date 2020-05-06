const express = require('express');
//IMportar mongo db
const mongoose = require('mongoose');
//Importar Routing
const routes = require('./routes');

// Crear el Server
const app = express();

//conectar a mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//---->Habilitar routing<-----(Middlewares)
app.use('/', routes());

// Definir un puerto con un calback
app.listen(4000, () => {
  console.log('Servidor Funcionando');
});
