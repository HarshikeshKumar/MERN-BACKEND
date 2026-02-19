import express from "express";

const app = express();

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

app.listen(3000, () => {
  console.log("Server is Running at PORT: 3000");
});
