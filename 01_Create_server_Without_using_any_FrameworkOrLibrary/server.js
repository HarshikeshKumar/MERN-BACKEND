// 1.........................
// const http = require("http");

// const server = http.createServer();

// server.listen(3000, () => {
//   console.log("Server is running at PORT: 3000");
// });

// 2...........................
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello World");
// });

// server.listen(3000, () => {
//   console.log("Server is running at PORT: 3000");
// });

// 3............................
// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url === "/") {
//     return res.end("Welcome to the home page");
//   } else {
//     return res.end("Hello World");
//   }
// });

// server.listen(3000, (req, res) => {
//   console.log("Server is running at PORT:3000");
// });

// 4.........MULTIPLE ROUTES................
const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/") {
    return res.end("Home Page");
  } else if (req.url === "/about") {
    return res.end("About Page");
  } else if (req.url === "/name") {
    return res.end("Name Page");
  } else if (req.url === "/gaurav") {
    return res.end("Gaurav Singh Page");
  } else if (req.url === "/harshikesh") {
    return res.end("Harshikesh Kumar Page");
  } else {
    return res.end("Route does not Matched");
  }
});

server.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
