import './CommentBox.scss';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import add_comment from '../../assets/images/add_comment.svg';

const CommentBox = () => {

    const clickHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='comment-container'>
            <Avatar />
            <form className='comment-container__form'>
                <label for="comment" className="comment-container__label">JOIN THE CONVERSATION</label>
                <textarea className="comment-container__box" type="text" id="comment" name="comment"
                    placeholder="Add a new comment"></textarea>
                <Button icon={add_comment} title='COMMENT' clickHandler={clickHandler} />
            </form>
        </div>
    )
}

export default CommentBox;
