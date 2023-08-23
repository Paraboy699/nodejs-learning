const http = require("http");
const QRCode = require("qrcode");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    rl.question("Enter the data for QR code: ", async (data) => {
      const qrCodeDataUrl = await QRCode.toDataURL(data);

      const html = `
      <h1>QR Code Here</h1>
      <img src="${qrCodeDataUrl}" alt="QR Code" />
      `;

      res.end(html);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
