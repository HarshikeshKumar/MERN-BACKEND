import express from "express";

const app = express();

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
