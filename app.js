const express = require("express");

const app = express();

app.get("/random", function (req, res) {
  res.send({
    value: Math.random(),
  });
});

app.get("/", function (req, res) {
  res.send("<h1>sup</h1>");
});

app.listen(process.env.PORT || 5000);

module.exports = app;
