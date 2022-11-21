const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("yo");
});

app.listen(process.env.PORT || 5000);

module.exports = app;
