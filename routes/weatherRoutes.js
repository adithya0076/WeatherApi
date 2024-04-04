const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const dataGenerator = require('../controllers/dataGenerateController');

router.get('/', weatherController.getWeather);
router.get('/generate', dataGenerator.generateWeatherData);
router.get('/data', weatherController.fetchweatherData);
router.get('/city', weatherController.fetchweathercityData);

module.exports = router;


