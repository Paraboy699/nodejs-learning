// Import the currency-converter package
const cc = require("currency-converter")({
  CLIENTKEY: "YOUR_OPEN_EXCHANGE_RATES_KEY",
});

// Convert an amount from one currency to another
async function convertCurrency(amount, convertFrom, convertTo, live = false) {
  try {
    const result = await cc.convert(amount, convertFrom, convertTo, live);
    return result;
  } catch (error) {
    console.error("Error converting currency:", error);
    return null;
  }
}

// Get the conversion rate between two currencies
async function getConversionRate(convertFrom, convertTo, live = false) {
  try {
    const rate = await cc.rates(convertFrom, convertTo, live);
    return rate;
  } catch (error) {
    console.error("Error getting conversion rate:", error);
    return null;
  }
}

module.exports = {
  convertCurrency,
  getConversionRate,
};
