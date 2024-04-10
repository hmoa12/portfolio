const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByCredentials(username, password);
    const token = user.generateAuthToken();
    res.send(user);
  } catch (e) {
    throw new Error(e);
  }
});

router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    const token = user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
