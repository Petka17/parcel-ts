const path = require("path");
const express = require("express");
const morgan = require("morgan");
const Bundler = require("parcel-bundler");

const bundler = new Bundler("./public/index.html");

const proxy = require("./setupProxy");

const app = express();

app.use(morgan("dev"));
proxy(app);
app.use(bundler.middleware());

app.listen(1234);
