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
    bio: {
      type: String,
    },
  },
  education: {
    title: {
      type: String,
    },
    location: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  experience: {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    location: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
    description: {
      type: String,
    },
  },
  skills: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);
module.exports = Portfolio;
