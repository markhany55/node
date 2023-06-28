const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is the home page");
  } else if (req.url === "/about") {
    res.end("this is our web history");
  } else {
    res.end(`
      <h1>Opppps</h1>
      `);
  }
});
server.listen(5000);
