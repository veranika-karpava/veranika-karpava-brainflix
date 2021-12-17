const express = require('express');
const cors = require('cors');
const videoRouter = require('./routes/videos');



require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5050;


// CORS middleware
app.use(cors({
    origin: process.env.CLIENT_URL
}));

app.use(express.json());

// static middleware
app.use(express.static('public'));

// router middleware
app.use('/videos', videoRouter);

app.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}`)
})