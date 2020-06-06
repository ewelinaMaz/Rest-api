const express = require('express');
const router = express.Router();
const db = require('./db.js');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats[req.params.id -1]);
});

router.route('/seats').post((req, res) => {
    res.json({message: 'ok'});
});

router.route('/seats/:id').put((req, res) => {
    res.json({message: 'ok'});
});

router.route('/seats/:id').delete((req, res) => {
    res.json({message: 'ok'});
});


module.exports = router;

