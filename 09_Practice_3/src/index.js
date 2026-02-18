import express from "express";
import apiRouter from "./routes/apiRouter/apiRouter.js";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "Welcome to Home page",
  });
});

app.get(/.*/, (req, res) => {
  return res.json({
    error: "Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
