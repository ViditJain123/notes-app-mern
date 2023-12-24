const express = require('express')
const app = express()
const port = 8080
const connectDB = require('./config/db');
require('dotenv').config();


connectDB();

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