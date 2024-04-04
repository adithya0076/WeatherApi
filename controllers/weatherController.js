const axios = require('axios');
const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://admin:admin123@weatherdb.jvufrcc.mongodb.net/appName=WeatherDB";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const Weather = require("../config/weatherModel");

const getWeather = async (req, res) => {
    try {
        const apiKey = '11d194e9800b4a109da806349725c2fc'; // Replace with your actual API key
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({ error: 'City parameter is required' });
        }

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);  

        const weatherData = {
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            city: response.data.name,
            country: response.data.sys.country
        };

        res.json(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
};

const fetchweatherData = async (req, res) => {
    try {
        await mongoose.connect(dbUrl, connectionParams);
        const weatherData = await Weather.find({});
        res.json(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        res.status(500).send('Error fetching weather data');
      } finally {
        mongoose.disconnect();
      }
};

module.exports = {
    getWeather,
    fetchweatherData
};
