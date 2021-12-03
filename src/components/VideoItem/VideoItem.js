import './VideoItem.scss'

const VideoItem = (props) => {

    return (
        <li className='related-videos__item'>
            <div className='related-videos__box-image'>
                <img className='related-videos__image' src={props.image} alt={props.title} />
            </div>
            <div className='related-videos__content'>
                <h3 className='related-videos__title-item'>{props.title}</h3>
                <p className='related-videos__channel'>{props.channel}</p>
            </div>
        </li>
    );
};
export default VideoItem;