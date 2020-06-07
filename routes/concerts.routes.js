const express = require('express');
const router = express.Router();
const db = require('../db.js');
const { uuid } = require('uuidv4');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    res.json(db.concerts[req.params.id - 1]);
});

router.route('/concerts').post((req, res) => {
    const {performer, genre, price, day, image} = req.body;
    const id = uuid();
    db.concerts.push({
        id: id,
        performer: performer,
        genre: genre,
        price: price,
        day: day,
        image: image,
    });
    res.json({ message: 'ok' });
});

router.route('/concerts/:id').put((req, res) => {
    const {performer, genre, price, day, image} = req.body;
    db.concerts = db.concerts.map(item => {
        if (item.id == req.params.id) {
            return {
                id: req.params.id,
                performer: performer,
                genre: genre,
                price: price,
                day: day,
                image: image,
            };
        } else {
            return item;
        };
    });
    res.json({ message: 'ok' });
});

router.route('/concerts/:id').delete((req, res) => {
    db.concerts.splice(req.params.id, 1);
    res.json({ message: 'ok' });
});


module.exports = router;