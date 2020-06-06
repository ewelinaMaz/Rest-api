const express = require('express');
const router = express.Router();
const db = require('./db.js');
const uuidv4 = require('uuid/v4');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
  });

  router.route('/testimonials/:id').get((req, res) => {
    res.json(db.testimonials[req.params.id -1]);
  });

  router.route('/testimonials/random').get((req, res) => {
    res.json(db.testimonials[Math.floor(Math.random() * db.testimonials.length)]);
  });

  router.route('/testimonials').post((req, res) => {
      const {author, text} = req.body;
      const id = uuidv4();
      res.json({message: 'ok'})
  });

  router.route('/testimonials/:id').put((req, res) => {
      const {author, text} = req.body;
      res.json({message: 'ok'})
  });

  router.route('/testimonials/:id').delate((req, res) => {
      res.json({message: 'ok'})
  });

  module.exports = router;