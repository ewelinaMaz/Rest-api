const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testimonials.controllers');

router.get('/testimonials', TestimonialController.getAll);
router.get('/testimonials/:id', TestimonialController.getById);
router.get('/testimonials/random', TestimonialController.random);
router.post('/testimonials', TestimonialController.addNew);
router.put('/testimonials/:id', TestimonialController.change);
router.delete('/testimonials/:id', TestimonialController.delete);

module.exports = router;