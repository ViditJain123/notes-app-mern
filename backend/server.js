const express = require('express')
const app = express()
const port = 8080
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();


connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, function (error) {

    // Checking any error occur while listening on port 
    if (error) {
        console.log('Something went wrong', error);
    }
    // Else sent message of listening 
    else {
        console.log('Server is listening on port' + port);
    }
})