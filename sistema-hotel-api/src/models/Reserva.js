const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  hospede: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospede',
    required: true,
  },
  quarto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quarto',
    required: true,
  },
  dataEntrada: {
    type: Date,
    required: true,
  },
  dataSaida: {
    type: Date,
    required: true,
  },
  valorTotal: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pendente', 'Confirmada', 'Cancelada'],
    default: 'Pendente',
  },
});

module.exports = mongoose.model('Reserva', ReservaSchema);