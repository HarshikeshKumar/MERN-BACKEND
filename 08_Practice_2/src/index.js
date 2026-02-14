import express from "express";

import apiRouter from "./routes/apiRouter.js";

import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to the Home page",
  });
});

app.get("/gaurav", (req, res) => {
  return res.json({
    message: "My name is Gaurav Singh",
  });
});

app.all(/.*/, (req, res) => {
  return res.json({
    error: "Page NOT Found",
  });
});

app.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
