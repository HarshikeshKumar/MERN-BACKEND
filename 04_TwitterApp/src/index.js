import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("combined"));

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

app.listen(3000, () => {
  console.log("Server is runnung at PORT: 3000");
});
