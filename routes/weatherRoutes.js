/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather data operations
 */

/**
 * @swagger
 * /weather/data:
 *   get:
 *     summary: Get weather data
 *     tags: [Weather]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Weather'
 */


const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const dataGenerator = require('../controllers/dataGenerateController');


router.get('/generate', dataGenerator.generateWeatherData);
/**
 * @swagger
 * components:
 *   schemas:
 *     Weather:
 *       type: object
 *       properties:
 *         district:
 *           type: string
 *         humidity:
 *           type: number
 *         temperature:
 *           type: number
 *         pressure:
 *           type: number
 *         weatherCondition:
 *           type: string
 */
router.get('/data', weatherController.fetchweatherData);

/**
 * @swagger
 * /weather/city:
 *   get:
 *     summary: Get weather data by city
 *     tags: [Weather]
 *     parameters:
 *       - name: city
 *         in: query
 *         description: Name of the city
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Weather'
 *       500:
 *         description: Internal server error
 */
router.get('/city', weatherController.fetchweathercityData);

module.exports = router;


