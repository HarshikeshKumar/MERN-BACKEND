import express from "express";
import morgan from "morgan";
import apiRouter from "./routes/apiRouter.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use(morgan("combined"));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.json({
    message: "Home Page",
  });
});

app.all(/.*/, (req, res) => {
  return res.json({
    message: "Custom Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
