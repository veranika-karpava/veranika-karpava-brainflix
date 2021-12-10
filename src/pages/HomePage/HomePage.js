
import React, { Component } from 'react';
import axios from 'axios';
import { API_URL, API_KEY } from '../../utils/apiUtil';
import VideoMainSection from '../../components/VideoMainSection/VideoMainSection';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import VideoList from '../../components/VideoList/VideoList';
// import videoData from '../../data/videos.json';
// import videoDataDetail from '../../data/video-details.json';

class HomePage extends Component {
    state = {
        videoList: [],
        selectedVideo: null
    }

    componentDidMount() {
        axios
            .get(`${API_URL}/videos${API_KEY}`)
            .then(response => {
                const videoResult = response.data;
                this.setState({
                    videoList: videoResult
                });
                return videoResult[0].id;
            })
            .then((firstVideoId) => {
                let videoToLoad;
                videoToLoad = firstVideoId;
                this.fetchVideoDetails(videoToLoad)
            })
            .catch((error) => console.log(error))
    }

    fetchVideoDetails = (videoId) => {
        axios
            .get(`${API_URL}/videos/${videoId}${API_KEY}`)
            .then(response => {
                const videoDetailResult = response.data;
                this.setState({
                    selectedVideo: videoDetailResult
                });
            })
            .catch((error) => console.log(error))
    }




    // state = {
    //     shortVideos: videoData,
    //     selectedVideo: videoDataDetail[0]
    // }

    // handleVideoSelect = title => {
    //     this.setState({
    //         selectedVideo: videoDataDetail.find(video => video.title === title)
    //     })
    // };

    render() {
        console.log(this.state.videoList)
        console.log(this.state.selectedVideo)
        // for filter sidebar list
        // const newVideoList = videoData.filter(video => video.title !== this.state.selectedVideo.title);

        return (
            <>
                <main>
                    <section className="video-section">
                        <VideoMainSection selectedVideo={this.state.selectedVideo} />
                        <div className='video-section__content-main'>
                            <VideoDetails selectedVideo={this.state.selectedVideo} />
                            <aside className='related-videos'>
                                <h2 className='related-videos__title'>NEXT VIDEOS</h2>
                                <VideoList videoList={this.state.videoList} />
                            </aside>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default HomePage;