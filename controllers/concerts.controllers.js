const Concert = require("../models/concert.model");
const Seat = require("../models/seat.model");
const sanitize = require('mongo-sanitize');

exports.getAll = async (req, res) => {
  try {
    let concerts = await Concert.find();
    let seats = await Seat.find();
    const freeTickets =
      50 -
      seats.filter((seat) =>
        concerts.map((concert) => concert._doc.day).includes(seat.day)
      ).length;
    concerts = concerts.map((concert) => ({
      ...concert._doc,
      tickets: freeTickets,
    }));
    res.json(concerts);
  } catch {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    if (!concert) res.status(404).json({ message: "Not found" });
    else res.json(concert);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.addNew = async (req, res) => {
  try {
    const cleanData = sanitize(req.body);
    const { performer, genre, price, day, image } = cleanData;
    const newConcert = new Concert({
      performer: performer,
      genre: genre,
      price: price,
      day: day,
      image: image,
    });
    await newConcert.save();
    res.json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.change = async (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  try {
    await Concert.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          performer: performer,
          genre: genre,
          price: price,
          day: day,
          image: image,
        },
      },
      { new: true },
      (err, doc) => {
        if (err) res.status(404).json({ message: "Not found..." });
        else res.json(doc);
      }
    );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    await Concert.findByIdAndRemove(req.params.id, (err, doc) => {
      if (err) res.status(404).json({ message: "Not found..." });
      else res.json(doc);
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
