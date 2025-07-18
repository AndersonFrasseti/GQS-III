const express = require('express');
const router = express.Router();
const QuartoController = require('../controllers/QuartoController');


router.post('/', QuartoController.createQuarto);


router.get('/', QuartoController.getAllQuartos);


router.get('/:id', QuartoController.getQuartoById);


router.put('/:id', QuartoController.updateQuarto);


router.delete('/:id', QuartoController.deleteQuarto);

module.exports = router;