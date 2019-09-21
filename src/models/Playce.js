const mongoose = require("mongoose");

const PlayceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

mongoose.model("Playce", PlayceSchema);
