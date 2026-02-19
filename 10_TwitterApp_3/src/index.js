import express from "express";
import apiRouter from "./routes/api/apiRouter.js";

import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to Home Page",
  });
});

app.get(/.*/, (req, res) => {
  return res.json({
    Error: "Page Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running at PORT: ${PORT}`);
});
