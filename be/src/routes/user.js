const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findByCredentials(username, password);
    const token = await user.generateAuthToken();
    res.send({ user, token, message: "Logged in successfully!" });
  } catch (e) {
    throw new Error(e);
  }
});

//This is a route for development, it must be removed in production.
router.post("/create", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(500).send({ message: e.errorResponse.errmsg });
  }
});

//For development, it must be removed in production.
router.delete("/users", async (req, res) => {
  const users = await User.deleteMany();
  res.send({ users });
});

module.exports = router;
