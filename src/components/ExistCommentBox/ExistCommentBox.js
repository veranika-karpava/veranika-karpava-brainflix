import './ExistCommentBox.scss';

const ExistCommentBox = (props) => {

    return (
        <div className='exist-comment-box'>
            <div className='exist-comment-box__avatar-grey'></div>
            <ul className='exist-comment-box__list-comment'>
                {props.comments.map((comment, i) => {
                    return (
                        <li className='exist-comment-box__item-comment' key={i}>
                            <p className='exist-comment-box__author'>{comment.name}</p>
                            <p className='exist-comment-box__datestamp'>
                                {new Date(comment.timestamp).toLocaleDateString("en-US", { timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit" })}
                            </p>
                            <p className='exist-comment-box__content'>{comment.comment}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}

export default ExistCommentBox;