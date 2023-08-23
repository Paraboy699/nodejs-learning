const CC = require("currency-converter-lt");

// Instantiate currency converter
const currencyConverter = new CC({
  from: "USD",
  to: "EUR",
  amount: 100,
});

// Convert currency and display result
currencyConverter
  .convert()
  .then((result) => {
    console.log(
      `${currencyConverter.options.amount} ${currencyConverter.options.from} = ${result.amount} ${currencyConverter.options.to}`
    );
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
