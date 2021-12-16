// const express = require('express');
// const fs = require('fs');
// const { v4: uuid } = require('uuid');
// const videoRouter = express.Router();

// // function for reading videoData
// const readFile = () => {
//     const videoData = fs.readFileSync('./data/videos.json');
//     return JSON.parse(videoData);
// }

// // get request for videoList
// videoRouter.get('/', (_req, res) => {
//     let videosData = readFile();
//     videosData = videosData.map(video => {
//         return {
//             id: video.id,
//             title: video.title,
//             channel: video.channel,
//             image: video.image,
//         }
//     })
//     res.status(200).send(videosData)
// })

// module.exports = videoRouter;
