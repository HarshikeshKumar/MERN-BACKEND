import express from "express";
import morgan from "morgan";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "This is Home Page",
  });
});

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.all(/.*/, (req, res) => {
  return res.status(404).json({
    message: "Page Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
