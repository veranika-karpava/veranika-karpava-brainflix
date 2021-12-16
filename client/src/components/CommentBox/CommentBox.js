import './CommentBox.scss';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import add_comment from '../../assets/images/add_comment.svg';

const CommentBox = () => {
    const SubmitHandler = (e) => {
        e.preventDefault()
        e.target.reset()
    };

    return (
        <div className='comment-container'>
            <Avatar className='comment-avatar' />
            <form className='comment-container__form' onSubmit={SubmitHandler} >
                <label htmlFor="comment" className="comment-container__label">JOIN THE CONVERSATION</label>
                <textarea className="comment-container__box" type="text" id="comment" name="comment"
                    placeholder="Add a new comment"></textarea>
                <Button icon={add_comment} title='COMMENT' />
            </form>
        </div>
    );
};

export default CommentBox;
