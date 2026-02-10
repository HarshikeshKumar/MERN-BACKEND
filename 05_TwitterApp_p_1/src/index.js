import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/ping", (req, res) => {
  return res.json({
    message: "Pong",
  });
});

app.post("/hello", (req, res) => {
  console.log(req.query);
  console.log(req.body);
  return res.json({
    message: "World",
  });
});

app.get("/tweets/:tweet_id/comments/:comment_id", (req, res) => {
  return res.json({
    message: "tweet details",
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
