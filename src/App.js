import './App.scss';
import { Component } from 'react';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';
import videoData from './data/videos.json';
// import videoDataDetail from './data/video-details.json';

class App extends Component {
  state = {
    shortVideos: videoData,
  }

  render() {
    console.log(this.state.shortVideos)
    return (
      <>
        <Header />
        <main>
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
