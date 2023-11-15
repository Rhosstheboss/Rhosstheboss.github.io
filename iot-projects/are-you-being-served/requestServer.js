// requestServer.js file

var args = process.argv.slice(2);
var url = args[0] ? args[0] : "https://Rhosstheboss.github.io/portfolio.html";

const http = require("http");
const request = require("request");
const port = 1313;

http
  .createServer(function (req, res) {
    request(
      "https://Rhosstheboss.github.io",
      function (error, response, body) {
        console.log("here");
        if (
          !body ||
          !response ||
          (error === null && response.statusCode !== 200)
        ) {
          console.log("here2");
          res.end("bad URL\n");
          return;
        }
        if (response.statusCode && !error === true) {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(body);
          console.log("here3");
        } else {
          res.writeHead(
            response.statusCode,
            { "content-type": "text/plain" },
            error.toString()
          );
        }
        console.log("here4");
        res.end();
      }
    );
  })
  .listen(port);
