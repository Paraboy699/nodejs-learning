const http = require("http");
const QRCode = require("qrcode");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });

    // Generate a QR code image data URL
    const qrCodeDataUrl = await QRCode.toDataURL("Hello");

    // Create an HTML page that displays the QR code image
    const html = `
      <html>
        <head>
          <title>QR Code Example</title>
        </head>
        <body>
          <h1>QR Code Here</h1>
          <img src="${qrCodeDataUrl}" alt="QR Code" />
        </body>
      </html>
    `;

    res.end(html);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
