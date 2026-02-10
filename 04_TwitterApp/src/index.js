import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

// function mid1(req, res, next) {
//   console.log(next);
//   console.log("mid1");
//   next();
// }

// function mid2(req, res, next) {
//   console.log("mid2");
//   next();
// }

// function mid3(req, res, next) {
//   console.log("mid3");
//   next();
// }

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

app.post("/about", (req, res) => {
  console.log("QIUERY PARAMS: ", req.query);
  console.log("REQ BODY: ", req.body);
  return res.json({
    message: "ok",
  });
});

app.get("/tweets/:tweet_id", (req, res) => {
  console.log(req.params);
  return res.json({
    message: "Params se data aaya",
  });
});

app.listen(3000, () => {
  console.log("Server is runnung at PORT: 3000");
});
