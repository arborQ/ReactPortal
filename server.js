const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 1337;

app.listen(port, function() {
  console.log("Proxy listening on http://localhost:" + port);
});

// var http = require("http");

// var server = http.createServer(function(request, response) {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   response.end("Hello Azure try me :)!");
// });

// var port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
