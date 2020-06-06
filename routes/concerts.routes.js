const express = require('express');
const router = express.Router();
const db = require('./db.js');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts[req.params.id -1]);
});

router.route('/concerts').post((req, res) => {
    res.json({message: 'ok'});
});

router.route('/concerts/:id').put((req, res) => {
    res.json({message: 'ok'});
});

router.route('/concerts/:id').delete((req, res) => {
    res.json({message: 'ok'});
});


module.exports = router;