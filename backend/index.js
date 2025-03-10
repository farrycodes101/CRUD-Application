const express = require('express')
const cors = require('cors');
const Connection = require('../backend/db/db.js');
const router = require('../backend/router/router.js');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Configurations
Connection();
require('dotenv').config();

app.use('/', router);

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Server Is Running at PORT ${PORT} Successfully ! `);
});