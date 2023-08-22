const QRCode = require("qrcode");

QRCode.toString(
  "I am a the danger!",
  { type: "terminal" },
  function (err, url) {
    console.log(url);
  }
);
