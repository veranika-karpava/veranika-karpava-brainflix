import './VideoDetails.scss';
import CommentBox from '../CommentBox/CommentBox';
import ExistCommentBox from '../ExistCommentBox/ExistCommentBox';
import formatTimestamp from '../../utils/formatDate';
import viewsIcon from '../../assets/images/views.svg';
import likesIcon from '../../assets/images/likes.svg';

const VideoDetails = ({ selectedVideo, fetchVideoDetails }) => {

    const { title, channel, timestamp, views, likes, description, comments, id } = selectedVideo;

    return (
        <div className='video-content'>
            <h1 className='video-content__title'>{title}</h1>
            <div className='video-content__details'>
                <div className='video-content__publication'>
                    <p className='video-content__channel'>by {channel}</p>
                    <p className='video-content__date-publication'> {formatTimestamp(timestamp)}</p>
                </div>
                <div className='video-content__popularity'>
                    <p className='video-content__views-content'>
                        <img className='video-content__image-views' src={viewsIcon} alt='Views icon' />
                        {views}
                    </p>
                    <p className='video-content__likes-content'>
                        <img className='video-content__image-likes' src={likesIcon} alt='Likes icon' />
                        {likes}
                    </p>
                </div>
            </div>
            <div className='video-content__description'>
                <p className='video-content__text'>{description}</p>
                <p className='video-content__comments-counter'>{comments.length} Comments</p>
            </div>
            <CommentBox id={id} fetchVideoDetails={fetchVideoDetails} />
            <ExistCommentBox comments={comments} />
        </div>
    );
};

export default VideoDetails;