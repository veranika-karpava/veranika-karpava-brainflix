import './VideoList.scss';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = (props) => {
    return (
        <ul className="related-videos__list">
            {props.shortVideos.map((video, i) => {
                return (
                    <VideoItem
                        key={i}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                        onVideoSelect={props.onVideoSelect}
                    />
                )
            })}
        </ul>
    );
};

export default VideoList;