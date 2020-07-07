const express = require('express');
const router = express.Router();
const db = require('../db.js');
const { v4: uuidv4 } = require('uuid');


router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    res.json(db.seats[req.params.id - 1]);
});

router.route('/seats').post((req, res) => {
    const newSeat = {
        id: uuidv4(),
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email
    };
        if (db.seats.some(seat => seat.day == newSeat.day &&
            seat.seat == newSeat.seat)) {
            res.json({ message: 'The slot is already taken..' });
        } else {
            db.seats.push(newSeat);
            req.io.emit('seatsUpdated', db.seats);
            res.json({ message: 'ok'});
        }
    });

router.route('/seats/:id').put((req, res) => {
    const seat = db.seats.find(item =>
        item.id == req.params.id);
        const index = db.seats.indexOf(seat);
        const updatedSeat = {
            ...seat,
            day: req.body.day,
            seat: req.body.seat,
            client: req.body.client,
            email: req.body.email
        };
        db.seats[index] = updatedSeat;
        res.json({ message: 'ok'});
    });

router.route('/seats/:id').delete((req, res) => {
    const seat = db.seats.find(item =>
        item.id == req.params.id);
    const index = db.seats.indexOf(seat);
    db.seats.splice(index, 1);    
    res.json({ message: 'ok' });
});


module.exports = router;

