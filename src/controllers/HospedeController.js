const Hospede = require('../models/Hospede');


exports.createHospede = async (req, res) => {
  try {
    const hospede = await Hospede.create(req.body);
    res.status(201).json(hospede);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllHospedes = async (req, res) => {
  try {
    const hospedes = await Hospede.find();
    res.status(200).json(hospedes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getHospedeById = async (req, res) => {
  try {
    const hospede = await Hospede.findById(req.params.id);
    if (!hospede) {
      return res.status(404).json({ message: 'Hóspede não encontrado' });
    }
    res.status(200).json(hospede);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateHospede = async (req, res) => {
  try {
    const hospede = await Hospede.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!hospede) {
      return res.status(404).json({ message: 'Hóspede não encontrado' });
    }
    res.status(200).json(hospede);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteHospede = async (req, res) => {
  try {
    const hospede = await Hospede.findByIdAndDelete(req.params.id);
    if (!hospede) {
      return res.status(404).json({ message: 'Hóspede não encontrado' });
    }
    res.status(200).json({ message: 'Hóspede deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};