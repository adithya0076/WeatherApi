const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

const weatherroutes = require('../routes/weatherRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/weather', weatherroutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
