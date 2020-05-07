//Funciona con el Routing
const Paciente = require('../models/Paciente');

//Crear funcion cuando se crea un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  // TODO : crear objeto de paciente de datos req.body
  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log('error');
    //Ir hacia la siguiente funcion
    next();
  }

  res.json({ mensaje: 'El cliente se agregó correctamente' });
};

/** Obtiene todos los pacientes */
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};
