const express = require('express');
const router = express.Router();
const SeatController = require('../controllers/seats.controllers');

router.get('/seats', SeatController.getAll);
router.get('/seats/:id', SeatController.getById);
router.post('/seats', SeatController.addNew);
router.put('/seats/:id', SeatController.change);
router.delate('/seats/:id', SeatController.delete);

module.exports = router;

