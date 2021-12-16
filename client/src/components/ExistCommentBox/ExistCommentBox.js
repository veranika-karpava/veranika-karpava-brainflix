import './ExistCommentBox.scss';
import formatTimestamp from '../../utils/formatDate';

const ExistCommentBox = ({ comments }) => {

    return (
        <div className='exist-comment-box'>
            <ul className='exist-comment-box__list-comment'>
                {comments.map((comment, i) => {
                    return (
                        <li className='exist-comment-box__item-comment' key={i}>
                            <div className='exist-comment-box__avatar-grey'></div>
                            <div className="exist-comment-box__content">
                                <p className='exist-comment-box__author'>{comment.name}</p>
                                <p className='exist-comment-box__datestamp'>
                                    {formatTimestamp(comment.timestamp)}
                                </p>
                                <p className='exist-comment-box__text'>{comment.comment}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default ExistCommentBox;