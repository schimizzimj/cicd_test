const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("sup");
});

app.listen(process.env.PORT || 5000);

module.exports = app;
