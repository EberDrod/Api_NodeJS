const mongoose = require('mongose');
const Shema = mongoose.Shema;

const pacientesSchema = new Shema({
  nombre: {
    type: String,
    trim: true,
  },
  propietario: {
    type: String,
    trim: true,
  },
  fecha: {
    type: String,
    trim: true,
  },
  hora: {
    type: String,
    trim: true,
  },
  sintomas: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Pacientes', pacientesSchema);
