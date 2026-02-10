// 1.........................
// const http = require("http");

// const server = http.createServer();

// server.listen(3000, () => {
//   console.log("Server is running at PORT: 3000");
// });

// 2...........................
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(3000, () => {
  console.log("Server is running at PORT: 3000");
});
