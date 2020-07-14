const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controllers');

router.get('/concerts', ConcertController.getAll);
router.get('/concerts/:id', ConcertController.getById);
router.post('/concerts', ConcertController.addNew);
router.put('concerts/:id', ConcertController.change);
router.delete('concerts/:id', ConcertController.delete);

module.exports = router;