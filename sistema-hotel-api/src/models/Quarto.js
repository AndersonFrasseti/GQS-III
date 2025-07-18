const mongoose = require('mongoose');

const QuartoSchema = new mongoose.Schema({
  numero: {
    type: Number,
    required: true,
    unique: true,
  },
  tipo: {
    type: String,
    enum: ['Solteiro', 'Casal', 'Suite'],
    required: true,
  },
  precoPorNoite: {
    type: Number,
    required: true,
  },
  disponivel: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Quarto', QuartoSchema);