const express = require('express');
const router = express.Router();
const db = require('../db.js');
const { uuid } = require('uuidv4');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats[req.params.id - 1]);
});

router.route('/seats').post((req, res) => {
    for (let item = 0; item < db.seats.length; item++) {
        if (db.seats[item], seats == req.body.seat &&
            db.seats[item].day == req.body.day) {
            res.json({ message: 'The slot is already taken..' });
        }
    }
    const id = uuid();
    const { day, seat, client, email} = req.body;
    db.seat.push({
        id: id,
        day: day,
        seat: seat,
        client: client,
        email: email,
    });
    res.json({ message: 'ok'});
});

router.route('/seats/:id').put((req, res) => {
    const { day, seat, client, email} = req.body;
    db.seats = db.seats.map(item => {
        if(item.id = req.pamrams.id) {
            return {
                id: req.params.id,
                day: day,
                seat: seat,
                client: client,
                email: email,
            };
        } else {
            return item;
        };
    });
    res.json({ message: 'ok' });
});

router.route('/seats/:id').delete((req, res) => {
    db.seats.splice(req.params.id, 1);
    res.json({ message: 'ok' });
});


module.exports = router;

