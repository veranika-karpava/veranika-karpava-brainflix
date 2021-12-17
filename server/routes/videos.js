const express = require('express');
const fs = require('fs');
const { v4: uuid } = require('uuid');
const videoRouter = express.Router();

// function for reading videoData
const readFile = () => {
    const videoData = fs.readFileSync('./data/videos.json');
    return JSON.parse(videoData);
}

// get request for videoList
videoRouter.get('/', (_req, res) => {
    let videosData = readFile();
    videosData = videosData.map(video => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }
    })
    res.status(200).send(videosData)
})

// get request for videoId router
videoRouter.get('/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    let videosData = readFile();
    const video = videosData.find(video => video.id === videoId);

    if (!video) {
        return res.status(404).send("Video not found");
    }
    return res.status(200).json(video);
});


module.exports = videoRouter;
