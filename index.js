const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3000;

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { 
    useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to Database');
});

// Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// Route Middlewares
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(port, () => {
    console.log(`Server is now running on ${port}`);
})