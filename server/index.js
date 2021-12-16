const express = require('express');


require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on ${PORT}`)
})