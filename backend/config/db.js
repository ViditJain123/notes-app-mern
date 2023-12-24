const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
    try {
        // Database Connection
        const con = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;
