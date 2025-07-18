const Reserva = require('../models/Reserva');
const Quarto = require('../models/Quarto');


exports.createReserva = async (req, res) => {
  try {
    const { hospede, quarto, dataEntrada, dataSaida } = req.body;

    
    const quartoInfo = await Quarto.findById(quarto);
    if (!quartoInfo) {
      return res.status(404).json({ message: 'Quarto não encontrado' });
    }

    
    const entrada = new Date(dataEntrada);
    const saida = new Date(dataSaida);
    const diffTime = Math.abs(saida - entrada);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    
    const valorTotal = diffDays * quartoInfo.precoPorNoite;

    
    const reserva = await Reserva.create({
      hospede,
      quarto,
      dataEntrada,
      dataSaida,
      valorTotal,
    });

    res.status(201).json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find().populate('hospede').populate('quarto');
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id).populate('hospede').populate('quarto');
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }
    res.status(200).json(reserva);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndDelete(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva não encontrada' });
    }
    res.status(200).json({ message: 'Reserva deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};