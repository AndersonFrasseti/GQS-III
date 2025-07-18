const Quarto = require('../models/Quarto');


exports.createQuarto = async (req, res) => {
  try {
    const quarto = await Quarto.create(req.body);
    res.status(201).json(quarto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllQuartos = async (req, res) => {
  try {
    const quartos = await Quarto.find();
    res.status(200).json(quartos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getQuartoById = async (req, res) => {
  try {
    const quarto = await Quarto.findById(req.params.id);
    if (!quarto) {
      return res.status(404).json({ message: 'Quarto não encontrado' });
    }
    res.status(200).json(quarto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateQuarto = async (req, res) => {
  try {
    const quarto = await Quarto.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!quarto) {
      return res.status(404).json({ message: 'Quarto não encontrado' });
    }
    res.status(200).json(quarto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteQuarto = async (req, res) => {
  try {
    const quarto = await Quarto.findByIdAndDelete(req.params.id);
    if (!quarto) {
      return res.status(404).json({ message: 'Quarto não encontrado' });
    }
    res.status(200).json({ message: 'Quarto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};