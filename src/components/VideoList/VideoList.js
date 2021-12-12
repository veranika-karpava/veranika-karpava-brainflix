import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';
import React, { Component } from 'react';
// 84e96018-4022-434e-80bf-000ce4cd12b8

// this.state.videoList.filter(video => video.id !== this.state.selectedVideo)
const VideoList = (props) => {
    console.log(props)

    // const { selectedVideoId } = props.selectedVideo.id;
    // console.log(selectedVideoId)
    return (
        <>
            <h2 className='related-videos__title'>NEXT VIDEOS</h2>
            <ul className="related-videos__list">

                {props.videoList.map((video) => {
                    return (
                        <VideoItem
                            key={video.id}
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                        // onVideoSelect={props.onVideoSelect}
                        />
                    )
                })}
            </ul>
        </>
    );
};

export default VideoList;



// class VideoList extends Component {
//     render() {
//         return (
//             <>
//                 <h2 className='related-videos__title'>NEXT VIDEOS</h2>
//                 <ul className="related-videos__list">
//                     {this.props.videoList.filter(video => {
//                         return this.props.selectedVideo.id !== video.id;
//                     })
//                         .map((video) => {
//                             return (
//                                 <VideoItem
//                                     key={video.id}
//                                     id={video.id}
//                                     image={video.image}
//                                     title={video.title}
//                                     channel={video.channel}
//                                 // onVideoSelect={props.onVideoSelect}
//                                 />
//                             )
//                         })}
//                 </ul>
//             </>
//         );
//     }

// };

// export default VideoList;