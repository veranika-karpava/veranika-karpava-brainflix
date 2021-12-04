import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import VideoMainSection from './components/VideoMainSection/VideoMainSection';
import VideoList from './components/VideoList/VideoList';
import videoData from './data/videos.json';
import videoDataDetail from './data/video-details.json';


class App extends Component {
  state = {
    shortVideos: videoData,
    selectedVideo: videoDataDetail[0]
  }

  render() {
    console.log(this.state.shortVideos)
    return (
      <>
        <Header />
        <main>
          <VideoMainSection />
          <aside className='related-videos'>
            <h2 className='related-videos__title'>NEXT VIDEOS</h2>
            <VideoList shortVideos={this.state.shortVideos} />
          </aside>
        </main>
      </>
    )
  }
}

export default App;
