import express from "express";

const app = express();

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
