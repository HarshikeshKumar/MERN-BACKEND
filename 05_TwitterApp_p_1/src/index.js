import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

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

app.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
