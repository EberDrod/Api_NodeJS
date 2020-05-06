const express = require('express');
const router = express.Router();
//Importando controlador
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function () {
  //Agrega nuevos pacientes via POST
  router.post(
    '/pacientes',
    //Importar controlador & funcion
    pacienteController.nuevoCliente
  );
  return router;
};
