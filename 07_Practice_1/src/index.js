import express from "express";
import apiRouter from "./routes/apiRouter.js";

const app = express();

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
