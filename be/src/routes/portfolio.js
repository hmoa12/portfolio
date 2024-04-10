const express = require("express");
const Portfolio = require("../models/portfolio");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const info = req.body;
    const add = new Portfolio({
      ...req.body,
    });
    res.send(add);
  } catch (e) {
    res.send(e);
  }
});

router.get("/", async (req, res) => {
  const info = await Portfolio.find({});
  res.send(info);
});

router.patch("/update", async (req, res) => {
  const _id = req.params._id;
  const updates = { $set: req.body };
  try {
    const info = await Portfolio.findByIdAndUpdate(_id, update, { new: true });
    if (!info) {
      return res.status(404).send("No portfolio found with such ID.");
    }
    res.send(info);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
