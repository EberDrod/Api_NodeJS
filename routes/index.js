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
  // Obtiene todos los registros de paciente en la BD
  router.get('/pacientes', pacienteController.obtenerPacientes);

  return router;
};
