import './VideoItem.scss'

const VideoItem = (props) => {
    const { title, image, channel, id } = props;

    // const handleVideoSelect = (e) => {
    //     e.preventDefault();
    //     props.onVideoSelect(props.title)
    // }

    return (
        <li className='related-videos__item'>
            <div className='related-videos__box-image'>
                <img className='related-videos__image' src={image} alt={title} />
            </div>
            <div className='related-videos__content'>
                <h3 className='related-videos__title-item'>{title}</h3>
                <p className='related-videos__channel'>{channel}</p>
            </div>
        </li>
    );
};
export default VideoItem;