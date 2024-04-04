const express = require('express');
const app = express();
const port = 3000;

const weatherroutes = require('../routes/weatherRoutes');

app.use(express.json());

app.use('/weather', weatherroutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
