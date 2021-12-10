import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
    console.log(props)
    return (
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
    );
};

export default VideoList;