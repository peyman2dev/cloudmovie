const http = require("http");
const fs = require("fs");
const url = require("url");
const db = require('./db.json');

const server = http.createServer((req, res) => {
  // Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === "OPTIONS") {
    // Handle preflight request
    res.writeHead(204);
    res.end();
  } else if (req.method === "GET" && req.url === "/v1/movies") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const movies = db.movies;
    res.write(JSON.stringify([
      ...movies
    ]
    ));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server started successfully, port: 3000");
});