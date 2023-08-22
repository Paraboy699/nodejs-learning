const http = require("http");
const myModules = require("./myCustomModule");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const currentDate = myModules.getCurrentDate();
  res.end(`Current Date: ${currentDate}`);
});

server.listen(3000, "127.0.0.1", function () {
  console.log("Server is listening on port 3000");
});
