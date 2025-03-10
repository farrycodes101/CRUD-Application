const mongoose = require('mongoose');
require("dotenv").config()

const Connection = async () => {
    try {
        const MongoUrl = process.env.MONGO_URL;
        await mongoose.connect(MongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected Successfully !');
    } catch (err) {
        console.error('Database Connection Error:', err);
    }
}

module.exports = Connection;