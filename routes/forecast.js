require("dotenv").config();
const axios = require("axios");

const token = process.env.OPEN_WEATHER_KEY;

const getCityForecast = async (city) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${token}`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.log("eee", err.message);
    throw err;
  }
};

module.exports = getCityForecast;
