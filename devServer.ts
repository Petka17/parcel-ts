import express from "express";
import morgan from "morgan";
import Bundler from "parcel-bundler";

import proxy from "./setupProxy";

const bundler = new Bundler("./public/index.html");

const app = express();

app.use(morgan("dev"));
proxy(app);
app.use(bundler.middleware());

app.listen(1234);
