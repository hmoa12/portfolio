const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
  personal: {
    first_name: {
      type: String,
      trim: true,
      required: true,
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
    },
  },
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
module.exports = Portfolio;
