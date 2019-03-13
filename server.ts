import path from "path";
import express from "express";
import morgan from "morgan";

import proxy from "./setupProxy";

const app = express();

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "dist")));

proxy(app);

app.get("/*", function index(_, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(4322);
