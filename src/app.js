const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
const cors = require('cors');
const app = express();
const port = 3000;

const weatherroutes = require('../routes/weatherRoutes');

app.use(cors()); // Allow all origins
app.use(express.json());

// Define specific origins to allow
// app.use(cors({
//   origin: 'http://localhost:3003'
// }));

app.use('/weather', weatherroutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
