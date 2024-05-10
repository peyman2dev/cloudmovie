const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/v1/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end();
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server started successfully, port: 3000");
});
