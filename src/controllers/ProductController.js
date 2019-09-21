const mongoose = require("mongoose");
const Playce = mongoose.model("Playce");

module.exports = {
  async index(req, res) {
    const playce = await Playce.find();

    return res.json(products);
  },

  async show(req, res) {
    const playce = await Playce.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    const playce = await Playce.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    const playce = await Playce.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  },

  async destroy(req, res) {
    await playce.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
