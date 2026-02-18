import express from "express";

const app = express();

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
