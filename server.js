const express = require("express");
const url = require("url");
const path = require("path");
var proxy = require("express-http-proxy");
var fallback = require("express-history-api-fallback");

const app = express();

console.log(process.argv);

const port = process.env.PORT || 1337;
const proxyUrl = process.env.PROXY || "localhost:5000";

app.use(express.static("public"));

app.use(
	"/api/*",
	proxy(proxyUrl, {
		proxyReqPathResolver: req => url.parse(req.baseUrl).path
	})
);

app.use(fallback(__dirname + "/public/index.html"));


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
