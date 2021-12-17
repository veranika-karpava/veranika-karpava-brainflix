const express = require('express');
const videoRouter = require('./routes/videos');



require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5050;


// middleware
app.use('/videos', videoRouter);


app.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}`)
})