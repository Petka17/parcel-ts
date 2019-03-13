const path = require("path");
const express = require("express");
const morgan = require("morgan");

const proxy = require("./setupProxy");

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "dist")));

proxy(app);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(4321);
