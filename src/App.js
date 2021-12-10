import './App.scss';
import { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
// import VideoMainSection from './components/VideoMainSection/VideoMainSection';
// import VideoDetails from './components/VideoDetails/VideoDetails';
// import VideoList from './components/VideoList/VideoList';
// import videoData from './data/videos.json';
// import videoDataDetail from './data/video-details.json';

class App extends Component {
  // state = {
  //   shortVideos: videoData,
  //   selectedVideo: videoDataDetail[0]
  // }

  // handleVideoSelect = title => {
  //   this.setState({
  //     selectedVideo: videoDataDetail.find(video => video.title === title)
  //   })
  // };

  render() {
    // for filter sidebar list
    // const newVideoList = videoData.filter(video => video.title !== this.state.selectedVideo.title);

    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact={true} component={HomePage} />
            <Route path="/video-upload" exact={true} component={VideoUploadPage} />
            {/* <RouteRoute path="/video-player" exact={true} component={VideoUploadPage} /> */}
          </Switch>
        </BrowserRouter>

        {/* <main>
          <section className="video-section">
            <VideoMainSection selectedVideo={this.state.selectedVideo} />
            <div className='video-section__content-main'>
              <VideoDetails selectedVideo={this.state.selectedVideo} />
              <aside className='related-videos'>
                <h2 className='related-videos__title'>NEXT VIDEOS</h2>
                <VideoList
                  shortVideos={newVideoList}
                  onVideoSelect={this.handleVideoSelect} />
              </aside>
            </div>
          </section>
        </main> */}
      </>
    )
  }
}

export default App;
