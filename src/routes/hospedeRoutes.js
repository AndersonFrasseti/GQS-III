const express = require('express');
const router = express.Router();
const HospedeController = require('../controllers/HospedeController');

router.post('/', HospedeController.createHospede);
router.get('/', HospedeController.getAllHospedes);
router.get('/:id', HospedeController.getHospedeById);
router.put('/:id', HospedeController.updateHospede);
router.delete('/:id', HospedeController.deleteHospede);

module.exports = router;