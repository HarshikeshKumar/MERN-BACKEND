import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.get("/hello", (req, res) => {
  return res.json({
    message: "World",
  });
});

app.listen(3000, () => {
  console.log("Server is runnung at PORT: 3000");
});
