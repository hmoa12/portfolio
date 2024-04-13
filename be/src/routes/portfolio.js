const express = require("express");
const Portfolio = require("../models/portfolio");
const auth = require("../middleware/auth");

const router = express.Router();

//This must be a temporary route for initiation... This should either be protected or removed.
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

router.patch("/update", auth, async (req, res) => {
  const _id = req.params._id;
  const updates = { $set: req.body };
  try {
    const info = await Portfolio.findByIdAndUpdate(_id, update, { new: true });
    if (!info) {
      return res.status(404).send("No portfolio found with such ID.");
    }
    res.send(info);
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
