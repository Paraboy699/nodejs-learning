const axios = require("axios");
const moment = require("moment");

async function getWeather() {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );

    const temperatureData = response.data;
    const currentTimeIndex = moment().hour();
    const currentTemperature =
      temperatureData.hourly.temperature_2m[currentTimeIndex];
    const currentDate = moment().format("YYYY-MM-DD");

    console.log(`Current Date: ${currentDate}`);
    console.log(`Current Temperature: ${currentTemperature}°C`);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeather();
