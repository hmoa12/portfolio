const express = require("express");
const userRouter = require("./routes/user");
const portfolioRouter = require("./routes/portfolio");

require("./db/mongoose");

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(portfolioRouter);

module.exports = app;
